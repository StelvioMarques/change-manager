'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import SectionReveal from '../../SectionReveal'
import { ServiceCard } from './card'
import { SERVICES } from './data'

export default function Services() {
  const gridRef = useRef(null)

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll('.service-card')

    cards?.forEach((card, i) => {
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.65,
        delay: (i % 3) * 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 87%', once: true },
      })
    })
  }, { scope: gridRef })

  return (
    <section id="services" className="border-t border-border">
      <div className="py-16 px-4 sm:py-20 sm:px-8 lg:py-28 lg:px-16 max-w-330 mx-auto">

        <SectionReveal
          tag="p"
          className={cn(
            'inline-flex items-center gap-2.5 mb-4',
            'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-muted-foreground',
            'before:content-[""] before:w-5 before:h-px before:bg-muted-foreground',
          )}
        >
          O que fazemos
        </SectionReveal>

        <SectionReveal
          tag="h2"
          className="font-bebas text-foreground mb-10 sm:mb-12 lg:mb-16 leading-[0.93] tracking-[0.02em]"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 6.5rem)' }}
        >
          Serviços que<br />
          <em className="stroke-title">Fazem</em> a Diferença
        </SectionReveal>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border"
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.num}
              svc={svc}
              index={i}
              total={SERVICES.length}
            />
          ))}
        </div>

      </div>
    </section>
  )
}