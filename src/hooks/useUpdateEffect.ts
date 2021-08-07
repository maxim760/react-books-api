import { useRef, useEffect } from 'react';

export const useUpdateEffect = (callback: Function, dependencies: any[] = []) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return callback();
    }
  }, dependencies);
};
