# @andrejground/lab

[![npm](https://img.shields.io/npm/v/@andrejground/lab)](https://www.npmjs.com/package/@andrejground/lab)

A customizable React component and hooks library. Each component exposes a `classNames` API so you can override every visual slot to match your own design system.

## Installation

```bash
npm install @andrejground/lab
```

```bash
pnpm add @andrejground/lab
```

```bash
yarn add @andrejground/lab
```

## Getting Started

Import the styles in the root of your app:

```tsx
import '@andrejground/lab/style.css';
```

Then use any component or hook:

```tsx
import { Select, Dropdown, Popover } from '@andrejground/lab';
```

## What's Inside

### Components

- [**Select**](https://andrejground.com/lab/components/select) - single & multi-select with autocomplete, infinite scroll, keyboard navigation
- [**Dropdown**](https://andrejground.com/lab/components/dropdown) - nested dropdowns, sections, keyboard navigation
- [**Popover**](https://andrejground.com/lab/components/popover) - flexible positioning, focus trapping, backdrop options
- [**Tooltip**](https://andrejground.com/lab/components/tooltip) - built on top of Popover

### Hooks

- [**useDebouncedCallback**](https://andrejground.com/lab/hooks/useDebouncedCallback) - debounce any callback by a given delay
- [**useDebouncedValue**](https://andrejground.com/lab/hooks/useDebouncedValue) - debounce a reactive value
- [**useDelayUnmount**](https://andrejground.com/lab/hooks/useDelayUnmount) - delay unmounting to allow exit animations
- [**useFocusTrap**](https://andrejground.com/lab/hooks/useFocusTrap) - trap focus within a container
- [**useInfiniteScroll**](https://andrejground.com/lab/hooks/useInfiniteScroll) - trigger a callback when scrolling near the end of a list
- [**useLocalStorage**](https://andrejground.com/lab/hooks/useLocalStorage) - persist state in localStorage
- [**useMutationObserver**](https://andrejground.com/lab/hooks/useMutationObserver) - observe DOM mutations on an element
- [**usePositionObserver**](https://andrejground.com/lab/hooks/usePositionObserver) - track an element's position on screen
- [**usePrevValue**](https://andrejground.com/lab/hooks/usePrevValue) - access the previous value of a variable
- [**usePreventBodyScroll**](https://andrejground.com/lab/hooks/usePreventBodyScroll) - lock body scroll on demand
- [**useResizeObserver**](https://andrejground.com/lab/hooks/useResizeObserver) - observe size changes on an element
- [**useWindowResize**](https://andrejground.com/lab/hooks/useWindowResize) - run a callback on window resize

## Documentation

Full docs, live examples and API reference at **[andrejground.com/lab/getting-started/introduction](https://andrejground.com/lab/getting-started/introduction)**.

## Requirements

- React 18.2+ or React 19

## License

MIT
