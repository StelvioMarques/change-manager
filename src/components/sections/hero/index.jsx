'use client'
/* eslint-disable @next/next/no-html-link-for-pages */

import Link from 'next/link'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { HeroScene } from './scene'
import { HEADLINE_LINES } from './data'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

export default function Hero() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl
      .from('#line1 span', { y: '105%', duration: 0.85, ease: 'power4.out' })
      .from('#line2 span', { y: '105%', duration: 0.85, ease: 'power4.out' }, '-=.65')
      .from('#line3 span', { y: '105%', duration: 0.85, ease: 'power4.out' }, '-=.65')
      .to('#hero-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=.35')
      .to('#hero-sub', { opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=.3')
      .to('#hero-ctas', { opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=.3')
      .to('#scroll-ind', { opacity: 1, duration: 0.5 }, '-=.2')

    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.8,
      onUpdate: (self) => {
        const p = self.progress
        gsap.set('#boxes-group', { x: p * 40, opacity: 0.06 * (1 - p * 0.5) })
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={cn(
        'relative overflow-hidden bg-background min-h-svh',
        'flex flex-col justify-center',
        'px-4 pt-10 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-16 lg:pt-28 lg:pb-20',
      )}
    >
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 w-full max-w-330 mx-auto">

        {/* Eyebrow */}
        <div
          id="hero-eyebrow"
          className={cn(
            'inline-flex items-center gap-3 opacity-0 mb-5 sm:mb-6',
            'text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-muted-foreground',
            'before:content-[""] before:w-7 before:h-px before:bg-muted-foreground',
          )}
        >
          Empresa de Mudanças · Angola
        </div>

        {/* Headline */}
        <h1
          className="font-bebas text-foreground leading-[0.9] tracking-[0.015em]"
          style={{ fontSize: 'clamp(3.5rem, min(10vw, 22vh), 13rem)' }}
        >
          {HEADLINE_LINES.map(({ id, text, stroke }) => (
            <span key={id} id={id} className="block overflow-hidden">
              <span className="block">
                {stroke ? <em className="stroke-headline">{text}</em> : text}
              </span>
            </span>
          ))}
        </h1>

        {/* Sub + CTAs */}
        <div className="mt-8 sm:mt-10 max-w-130">
          <p id="hero-sub" className="opacity-0 font-light leading-[1.8] text-muted-foreground text-[0.95rem] sm:text-base">
            Da primeira caixa ao último quadro — tratamos de tudo com rigor e cuidado absoluto.
            Porque mudar de casa não precisa de ser stressante.
          </p>

          <div id="hero-ctas" className="mt-7 sm:mt-8 opacity-0 flex flex-col gap-3 sm:flex-row sm:gap-3.5">
            <Button asChild size="lg" className="font-condensed  tracking-[0.12em] uppercase">
              <a href="/#cta-section">
                Orçamento Grátis <ArrowRight size={16} />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="font-condensed  tracking-[0.12em] uppercase">
              <Link href="/#process">
                Ver como funciona
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        id="scroll-ind"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <div className="w-px h-12 bg-ring animate-scroll-pulse" />
        <span className="text-[0.58rem] tracking-[0.22em] uppercase text-muted-foreground">Scroll</span>
      </div>
    </section>
  )
}