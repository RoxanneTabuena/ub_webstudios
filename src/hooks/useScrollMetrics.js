import { useEffect, useState } from 'react'

export function useScrollMetrics(ref) {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      setScrollTop(el.scrollTop)
      setScrollHeight(el.scrollHeight)
    }

    handleScroll()

    el.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ref, scrollTop, scrollHeight])

  return { scrollTop, scrollHeight }
}