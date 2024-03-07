import { useEffect, useRef, useState } from "react";

interface IntersectionObserverProps {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersection = ({
  threshold = 0,
  root = null,
  rootMargin = "0px",
}: IntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(observer);
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, isIntersecting];
};
