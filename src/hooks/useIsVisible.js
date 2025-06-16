import { useLayoutEffect, useState, useRef } from 'react';

export const useIsVisible = ({options}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (ref.current){
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }else{
            setVisible(false)
        }
      }, options);
  
      observer.observe(ref.current);
  
      // Cleanup observer on unmount
      return () => observer.disconnect();
    }

  }, []);

  return [ref, visible]
}