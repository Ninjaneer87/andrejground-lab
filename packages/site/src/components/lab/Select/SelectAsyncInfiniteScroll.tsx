import { debounceCallback } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteSelect from '@site/src/components/site-lab/SiteSelect/SiteSelect';
import { usePokemonList } from '@site/src/hooks/usePokemonList';
import React from 'react';

function SelectAsyncInfiniteScrollContent() {
  const { items, isLoading, onLoadMore, hasMore } = usePokemonList({
    fetchDelay: 300,
  });

  const { callback: debouncedSearch } = debounceCallback(
    (searchQuery?: string) => onLoadMore({ newOffset: 0, search: searchQuery }),
    500,
  );

  return (
    <SiteSelect
      openOnLabelClick
      items={items}
      truncate={{
        itemText: true,
        valueChipText: true,
        itemDescription: true,
        sectionTitle: true,
        valueText: true,
      }}
      multiple
      label="Async infinite scroll"
      search
      popOnSelection
      onSearchChange={debouncedSearch}
      placeholder="Select pokémons"
      infiniteScrollProps={{
        onLoadMore: (searchVal) => onLoadMore({ search: searchVal }),
        hasMore,
        isLoading,
      }}
    />
  );
}

function SelectAsyncInfiniteScroll() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <SelectAsyncInfiniteScrollContent />}
    </BrowserOnly>
  );
}
export default SelectAsyncInfiniteScroll;
