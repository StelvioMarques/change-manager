'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { WhatsAppIcon } from './whatsapp-icon'
import { WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL, STATS, TRUST_BADGES } from './data'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function CtaSection() {
  const innerRef = useRef(null)

  useGSAP(() => {
    gsap.from(Array.from(innerRef.current.children), {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: innerRef.current, start: 'top 78%', once: true },
    })
  }, { scope: innerRef })

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento%20para%20uma%20mudança.`

  return (
    <section id="cta-section" className="bg-background text-black relative overflow-hidden">
      <div className="py-16 px-4 sm:py-20 sm:px-8 lg:py-28 lg:px-16">
        <div
          ref={innerRef}
          className="max-w-330 mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center"
        >

          {/* Left — headline + CTAs */}
          <div>
            <p className={cn(
              'inline-flex items-center gap-2.5 mb-4',
              'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-gray2',
              'before:content-[""] before:w-5 before:h-px before:bg-gray2',
            )}>
              Pronto para mudar?
            </p>

            <h2
              className="font-bebas text-black leading-[0.93] tracking-[0.02em] mb-4"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 6.5rem)' }}
            >
              A Tua Nova Vida<br />Começa Hoje
            </h2>

            <p className="text-gray2 leading-[1.75] mb-8 max-w-md text-[0.95rem]">
              Pede o teu orçamento gratuito. Respondemos em menos de 2 horas em dias úteis — sem compromisso, sem letras pequenas.
            </p>

            {/* CTAs */}
            <div className="flex md:items-center gap-3 flex-col md:flex-row mb-3">
              <Button
                asChild
                size="lg"
                className="font-condensed font-bold tracking-widest uppercase gap-3"
              >
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Pedir Orçamento pelo WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-condensed font-semibold tracking-widest uppercase gap-2 border border-black/10"
              >
                <Link href="/agendar">
                  Agendar Mudança <ArrowUpRight size={13} />
                </Link>
              </Button>
            </div>

            {/* Call */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-gray3 text-[0.78rem]">ou liga:</span>

              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="font-condensed font-bold tracking-[0.06em] uppercase text-black text-[0.88rem] hover:opacity-60 transition-opacity duration-200"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          {/* Right — stats + trust + email */}
          <div className="flex flex-col gap-6">

            {/* Stats */}
            <div className="flex justify-between sm:gap-12">
              {STATS.map(({ value, label }) => (
                <div key={value}>
                  <p
                    className="font-bebas text-black leading-none"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    {value}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.15em] text-gray2 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Separator className="bg-black/10" />

            {/* Trust badges */}
            <div className="flex flex-col gap-3">
              {TRUST_BADGES.map((t) => (
                <div key={t} className="flex items-start gap-2.5 text-gray2 text-[0.82rem]">
                  <span className="mt-0.5 shrink-0 text-gray3">✓</span>
                  {t}
                </div>
              ))}
            </div>

            <Separator className="bg-black/10" />

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-gray3 text-[0.78rem]">Preferes email?</span>

              <a href={`mailto:${EMAIL}`}
                className="font-condensed font-semibold tracking-[0.04em] text-black text-[0.88rem] hover:opacity-60 transition-opacity duration-200"
              >
                {EMAIL}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section >
  )
}