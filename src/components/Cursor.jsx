'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailRef  = useRef(null)

  useGSAP(() => {
    const isMobile = window.matchMedia('(hover: none)').matches
    if (isMobile) return

    const cur   = cursorRef.current
    const trail = trailRef.current
    let mx = 0, my = 0, tx = 0, ty = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      gsap.set(cur, { x: mx, y: my })
    }
    document.addEventListener('mousemove', onMove)

    const tickerFn = () => {
      tx += (mx - tx) * 0.11
      ty += (my - ty) * 0.11
      gsap.set(trail, { x: tx, y: ty })
    }
    gsap.ticker.add(tickerFn)

    const targets = document.querySelectorAll(
      'a, button, .service-card, .test-card, .test-card-sm, .why-item'
    )
    targets.forEach(el => {
      const enter = () => {
        gsap.to(cur,   { width: 5,  height: 5,  duration: 0.2 })
        gsap.to(trail, { width: 56, height: 56, borderColor: 'rgba(255,255,255,.35)', duration: 0.2 })
      }
      const leave = () => {
        gsap.to(cur,   { width: 10, height: 10, duration: 0.2 })
        gsap.to(trail, { width: 34, height: 34, borderColor: 'rgba(255,255,255,.25)', duration: 0.2 })
      }
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    // Cleanup handled automatically by useGSAP
    return () => {
      document.removeEventListener('mousemove', onMove)
      gsap.ticker.remove(tickerFn)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-9999"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
      <div
        ref={trailRef}
        id="cursor-trail"
        className="fixed w-8.5 h-8.5 border border-white/25 rounded-full pointer-events-none z-9998"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
    </>
  )
}