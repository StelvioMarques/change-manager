'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import SectionReveal from '../../SectionReveal'
import { Avatar } from './avatar'
import { BIG_TESTIMONIAL, SMALL_TESTIMONIALS } from './data'

export default function Testimonials() {
  const bigRef = useRef(null)
  const rightRef = useRef(null)

  useGSAP(() => {
    gsap.from(bigRef.current, {
      x: -40, opacity: 0, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: bigRef.current, start: 'top 75%', once: true },
    })
  }, { scope: bigRef })

  useGSAP(() => {
    rightRef.current?.querySelectorAll('.test-card-sm').forEach((card, i) => {
      gsap.from(card, {
        x: 30, opacity: 0, duration: 0.65,
        delay: i * 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 75%', once: true },
      })
    })
  }, { scope: rightRef })

  return (
    <section id="testimonials" className="bg-card border-t border-b border-border">
      <div className="py-16 px-4 sm:py-20 sm:px-8 lg:py-28 lg:px-16 max-w-330 mx-auto">

        <SectionReveal
          tag="p"
          className={cn(
            'inline-flex items-center gap-2.5 mb-4',
            'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-muted-foreground',
            'before:content-[""] before:w-5 before:h-px before:bg-muted-foreground',
          )}
        >
          O que dizem os clientes
        </SectionReveal>

        <SectionReveal
          tag="h2"
          className="font-bebas text-foreground mb-10 sm:mb-12 lg:mb-16 leading-[0.93] tracking-[0.02em]"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 6.5rem)' }}
        >
          Palavras que<br />
          <em className="stroke-title">Valem</em> Muito
        </SectionReveal>

        <div className="flex flex-col gap-0.5 lg:grid lg:grid-cols-[1.3fr_1fr]">

          {/* Big card */}
          <div
            ref={bigRef}
            className="bg-background border border-border relative overflow-hidden p-8 sm:p-10 lg:p-12"
          >
            <span
              className="absolute pointer-events-none select-none font-bebas text-accent leading-none"
              style={{ fontSize: 'clamp(5rem, 12vw, 8rem)', top: '-0.5rem', left: '1.5rem', letterSpacing: '-0.05em' }}
            >
              &quot;
            </span>

            <p className="text-foreground text-[0.75rem] tracking-widest mb-4 sm:mb-5 relative z-10">
              ★★★★★
            </p>
            <p
              className="font-light italic leading-[1.8] text-foreground mb-6 sm:mb-8 relative z-10"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
            >
              {BIG_TESTIMONIAL.text}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
              <Avatar initials={BIG_TESTIMONIAL.initials} />
              <div>
                <p className="font-semibold text-foreground text-[0.88rem]">{BIG_TESTIMONIAL.name}</p>
                <p className="text-muted-foreground mt-0.5 text-[0.72rem]">{BIG_TESTIMONIAL.role}</p>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div
            ref={rightRef}
            className="flex flex-col gap-0.5 sm:flex-row lg:flex-col"
          >
            {SMALL_TESTIMONIALS.map((t) => (
              <div
                key={t.initials}
                className="test-card-sm bg-background border border-border flex-1 p-6 sm:p-8 lg:p-9"
              >
                <p className="text-foreground text-[0.75rem] tracking-widest mb-4">★★★★★</p>
                <p className="font-light italic leading-[1.8] text-foreground mb-4 text-[0.88rem]">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <Avatar initials={t.initials} small />
                  <div>
                    <p className="font-semibold text-foreground text-[0.88rem]">{t.name}</p>
                    <p className="text-muted-foreground mt-0.5 text-[0.72rem]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}