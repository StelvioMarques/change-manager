'use client'
import { useEffect } from 'react'
import Script from 'next/script'
import { initScrollReveals } from '@/lib/animations'

export default function GsapLoader() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger)
            initScrollReveals()
          }
        }}
      />
    </>
  )
}