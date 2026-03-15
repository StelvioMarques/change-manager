'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/**
 * Scroll reveal wrapper.
 * - tag: the HTML element to render (default 'div')
 * - style: passed directly to the element (needed for clamp font-sizes)
 * - Does NOT use { scope } on the element itself to avoid interfering
 *   with inherited CSS like font-size: clamp(...)
 */
export default function SectionReveal({
  children,
  y = 30,
  x = 0,
  delay = 0,
  duration = 0.8,
  start = 'top 82%',
  className = '',
  style = {},
  tag: Tag = 'div',
}) {
  const ref = useRef(null)

  // No { scope } here — scope on a heading element breaks clamp() inheritance
  useGSAP(() => {
    if (!ref.current) return
    gsap.from(ref.current, {
      y, x, opacity: 0, duration, delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        once: true,
      },
    })
  }, []) // empty deps = runs once on mount, after DOM is ready

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
}
