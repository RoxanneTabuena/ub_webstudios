import { useEffect, useState, useRef } from 'react';

export const useComponentHeight = () => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, []);


  return [ref, height]
}