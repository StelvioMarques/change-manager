'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { ITEMS } from './data'
import { gsap, useGSAP } from '@/lib/gsap'
import SectionReveal from '../../SectionReveal'

export default function WhyUs() {
  const listRef = useRef(null)

  useGSAP(() => {
    const items = listRef.current?.querySelectorAll('.why-item')
    items?.forEach((item, i) => {
      gsap.from(item, {
        x: -20, opacity: 0, duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%', once: true },
      })
    })
  }, { scope: listRef })

  return (
    <section id="why">
      <div className="py-16 px-4 sm:py-20 sm:px-8 lg:py-28 lg:px-16 max-w-330 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-2 lg:gap-24 lg:items-center">

          {/* Left */}
          <div>
            <SectionReveal
              tag="p"
              className={cn(
                'inline-flex items-center gap-2.5 mb-4',
                'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-muted-foreground',
                'before:content-[""] before:w-5 before:h-px before:bg-muted-foreground',
              )}
            >
              Porquê escolher-nos
            </SectionReveal>

            <SectionReveal
              tag="h2"
              className="font-bebas text-foreground leading-[0.93] tracking-[0.02em] mb-5"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 6.5rem)' }}
            >
              O que nos<br />
              torna <em className="stroke-title">Diferentes</em>
            </SectionReveal>

            <p className="text-muted-foreground leading-[1.8] text-[0.95rem] max-w-sm lg:max-w-95">
              Não somos apenas transportadores. Somos especialistas em mudanças que entendem o peso emocional de mudar de casa — e tratamos cada mudança como se fosse a nossa.
            </p>
          </div>

          {/* Right */}
          <div ref={listRef} className="flex flex-col">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  'why-item flex gap-4 sm:gap-6 items-start py-6 sm:py-8',
                  'border-b border-border',
                  i === 0 && 'border-t border-border',
                )}
              >
                <span className="mt-0.5 shrink-0 text-muted-foreground">
                  {item.icon}
                </span>

                <div>
                  <h4 className="font-condensed font-bold uppercase tracking-[0.06em] text-foreground text-base mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-[1.7] text-[0.83rem]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}