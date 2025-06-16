import { useLayoutEffect, useState, useRef } from 'react';

export const useComponentHeight = () => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current){
      const observer = new ResizeObserver(([entry]) => {
        if (entry.contentRect) {
          setHeight(entry.contentRect.height);
        }
      });
  
      observer.observe(ref.current);
  
      // Cleanup observer on unmount
      return () => observer.disconnect();
    }

  }, []);

  return [ref, height]
}