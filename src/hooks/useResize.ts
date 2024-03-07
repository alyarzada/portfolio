import { useEffect, useRef, useState } from "react";

interface ResizeObserverSize {
  width: number;
  height: number;
}

export const useResize = (): [React.RefObject<Element>, ResizeObserverSize] => {
  const ref = useRef<Element>(null);
  const [size, setSize] = useState<ResizeObserverSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, size];
};
