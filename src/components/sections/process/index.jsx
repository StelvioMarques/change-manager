'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import SectionReveal from '../../SectionReveal'
import { StepCard } from './step-card'
import { STEPS } from './data'

export default function Process() {
  const gridRef = useRef(null)

  useGSAP(() => {
    const steps = gridRef.current?.querySelectorAll('.step')
    steps?.forEach((step, i) => {
      gsap.from(step, {
        y: 30, opacity: 0, duration: 0.65,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 72%', once: true },
      })
    })
  }, { scope: gridRef })

  return (
    <section id="process" className="bg-card">
      <div className="py-16 px-4 sm:px-8 sm:py-20 lg:px-16 lg:py-28 max-w-330 mx-auto">

        <SectionReveal
          tag="p"
          className={cn(
            'inline-flex items-center gap-2.5 mb-5',
            'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-muted-foreground',
            'before:content-[""] before:w-5 before:h-px before:bg-muted-foreground',
          )}
        >
          Como trabalhamos
        </SectionReveal>

        <SectionReveal
          tag="h2"
          className="font-bebas text-foreground mb-8 sm:mb-16 leading-[0.93] tracking-[0.02em]"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }}
        >
          4 Passos Para a<br />
          <em className="stroke-title">Tua</em> Nova Casa
        </SectionReveal>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border"
        >
          {STEPS.map((step, i) => (
            <StepCard
              key={step.num}
              step={step}
              index={i}
              total={STEPS.length}
            />
          ))}
        </div>

      </div>
    </section>
  )
}