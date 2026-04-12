import TypePopover from '../TypePopover';

export function PopoverPlacementTypePopover() {
  return (
    <TypePopover
      name="PopoverPlacement"
      code={`type PopoverPlacement =
  | 'top-start' | 'top-end' | 'top-center'
  | 'bottom-start' | 'bottom-end' | 'bottom-center'
  | 'left-start' | 'left-end' | 'left-center'
  | 'right-start' | 'right-end' | 'right-center';`}
    />
  );
}

export function InfiniteScrollPropsTypePopover() {
  return (
    <TypePopover
      name="InfiniteScrollProps"
      code={`type InfiniteScrollProps = {
  onLoadMore: (search?: string) => void;
  isLoading?: boolean;
  hasMore: boolean;
};`}
    />
  );
}
