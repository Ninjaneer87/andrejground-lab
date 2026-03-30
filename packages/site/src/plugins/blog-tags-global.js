module.exports = function blogTagsGlobalPlugin() {
  return {
    name: 'blog-tags-global',

    async allContentLoaded({ allContent, actions }) {
      const { setGlobalData } = actions;

      const blogContent = allContent['docusaurus-plugin-content-blog']?.default;
      if (!blogContent) {
        setGlobalData({ tags: [] });
        return;
      }

      const { blogTags } = blogContent;
      const tags = Object.values(blogTags)
        .filter((tag) => !tag.unlisted)
        .map((tag) => ({
          label: tag.label,
          permalink: tag.permalink,
          count: tag.items.length,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

      setGlobalData({ tags });
    },
  };
};
