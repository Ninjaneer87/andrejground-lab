import React, { type ReactNode, useCallback, useRef } from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { DocProvider, useDoc } from '@docusaurus/plugin-content-docs/client';
import DocItemLayout from '@theme/DocItem/Layout';
import DocItemMetadata from '@theme/DocItem/Metadata';
import TOCCollapsible from '@theme/TOCCollapsible';
import type { Props } from '@theme/DocItem';

function DocItemContentWrapper({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const { metadata, toc } = useDoc();
  const { frontMatter } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  const canRenderTOC = !hideTableOfContents && toc.length > 0;

  const tocMobileRef = useRef<HTMLDivElement>(null);
  const handleTocLinkClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target instanceof HTMLButtonElement) return;

      const button = tocMobileRef.current?.querySelector('button');
      button?.click();
    },
    [],
  );

  return (
    <DocItemLayout>
      {canRenderTOC && (
        <div
          ref={tocMobileRef}
          onClick={handleTocLinkClick}
          className="fixed-toc"
        >
          <TOCCollapsible
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
            className={clsx(
              'theme-doc-toc-mobile',
              'margin-bottom--md',
              'thin-scrollbar',
            )}
          />
        </div>
      )}
      {children}
    </DocItemLayout>
  );
}

export default function DocItem(props: Props): ReactNode {
  const DocItemContent = props.content;
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.docsPages,
          ThemeClassNames.page.docsDocPage,
          docHtmlClassName,
          'docs-doc-item-page'
        )}
      >
        <DocItemMetadata />
        <DocItemContentWrapper>
          <DocItemContent />
        </DocItemContentWrapper>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
