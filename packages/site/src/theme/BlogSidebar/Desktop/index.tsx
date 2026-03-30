import React, { memo } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type { Props as BlogSidebarContentProps } from '@theme/BlogSidebar/Content';
import type { Props } from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

type BlogTag = {
  label: string;
  permalink: string;
  count: number;
};

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({ items }) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};

function BlogSidebarDesktop({ sidebar }: Props) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  const { tags } = usePluginData('blog-tags-global') as { tags: BlogTag[] };

  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}
      >
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        />

        <hr />

        {tags.length > 0 && (
          <ul className={clsx('clean-list', styles.tagList)}>
            {tags.map((tag) => (
              <li key={tag.permalink}>
                <Link href={tag.permalink} className={styles.tag}>
                  {tag.label} ({tag.count})
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
