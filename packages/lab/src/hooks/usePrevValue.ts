import { useEffect, useRef, useState } from 'react';

export function usePrevValue<T>(value: T): T | undefined {
  const [prevValue, setPrevValue] = useState<T | undefined>(undefined);
  const currentRef = useRef(value);

  useEffect(() => {
    setPrevValue(currentRef.current);
    currentRef.current = value;
  }, [value]);

  return prevValue;
}
