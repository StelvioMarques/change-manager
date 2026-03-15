'use client'
import { ArrowRight, ArrowUpRight, CalendarCheck } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SectionReveal from '@/components/SectionReveal'
import { WhatsAppIcon } from '../cta/whatsapp-icon'

export default function NewsletterStrip() {
  const waUrl = `https://wa.me/${244955989943}?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento%20para%20uma%20mudança.`

  return (
    <section className="bg-card border-t border-border">
      <div className="px-4 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20 max-w-330 mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-end">

          {/* Left — newsletter */}
          <SectionReveal className="flex flex-col gap-6">
            <div>
              <p className={cn(
                'inline-flex items-center gap-2.5 mb-3',
                'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-muted-foreground',
                'before:content-[""] before:w-5 before:h-px before:bg-muted-foreground',
              )}>
                Newsletter
              </p>
              <h2
                className="font-bebas text-foreground leading-[0.93] tracking-[0.02em] mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                Fica Sempre a Par
              </h2>
              <p className="text-[0.88rem] text-muted-foreground leading-[1.7] max-w-sm">
                Novidades, promoções e dicas — sem spam, só o que interessa.
              </p>
            </div>

            {/* Email form */}
            <form className="flex md:max-w-104 focus-within:border-ring transition-colors duration-200">
              <Input
                type="email"
                placeholder="E-mail"
                className="flex-1 h-12 rounded-none shadow-none bg-transparent min-w-0"
              />
              <Button
                type="submit"
                className="h-12 rounded-none shrink-0 font-condensed font-bold tracking-widest uppercase gap-2 px-5"
              >
                Subscrever <ArrowRight size={14} />
              </Button>
            </form>
          </SectionReveal>

          {/* Right — CTA */}
          <SectionReveal delay={0.15} className="flex flex-col gap-5">
            <p className="text-[0.70rem] font-semibold tracking-[0.25em] uppercase text-muted-foreground/80">
              ou agenda já
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild size='lg' className="font-condensed font-bold tracking-widest uppercase gap-2">
                 <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Pedir Orçamento
                </a>
              </Button>

              <Button asChild size='lg' variant="outline" className="font-condensed font-semibold tracking-widest uppercase gap-2">
                <Link href="/agendar">
                  Agendar Mudança
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
              </Button>
            </div>

            <p className="text-[0.68rem] text-muted-foreground leading-[1.6]">
              Visita gratuita · Orçamento fixo · Sem compromisso
            </p>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}