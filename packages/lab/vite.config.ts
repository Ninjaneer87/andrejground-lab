import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

function removeLayerDirectives(): Plugin {
  return {
    name: 'remove-layer-directives',
    enforce: 'post',
    async closeBundle() {
      const fs = await import('node:fs');
      const postcss = (await import('postcss')).default;
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const removeLayerPlugin: any = {
        postcssPlugin: 'remove-layer',
        AtRule: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          layer(atRule: any) {
            if (atRule.nodes && atRule.nodes.length > 0) {
              atRule.replaceWith(atRule.nodes);
            } else {
              atRule.remove();
            }
          },
        },
      };

      const cssPath = path.resolve(__dirname, 'dist/lab.css');
      if (fs.existsSync(cssPath)) {
        const source = fs.readFileSync(cssPath, 'utf-8');
        const result = await postcss([removeLayerPlugin]).process(source, { from: cssPath });
        fs.writeFileSync(cssPath, result.css);
      }
    },
  };
}

function preserveUseClientDirective(): Plugin {
  return {
    name: 'preserve-use-client',
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk' && chunk.code) {
          const useClientPattern = /['"]use client['"]/;
          if (chunk.facadeModuleId && this.getModuleInfo(chunk.facadeModuleId)?.code?.match(useClientPattern)) {
            chunk.code = `'use client';\n${chunk.code}`;
          }
        }
      }
    },
  };
}

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    preserveUseClientDirective(),
    removeLayerDirectives(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      name: 'Lab',
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'lab',
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
});
