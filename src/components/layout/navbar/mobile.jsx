'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from './data'

export function NavbarMobile({ open, onToggle, onClose }) {
  // Bloqueia scroll no html E no body
  useEffect(() => {
    const html = document.documentElement
    if (open) {
      html.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      html.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  // Fecha com Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      {/* Hamburger */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onToggle}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        <Menu size={24} />
      </Button>

      {typeof window !== 'undefined' && createPortal(
        <>
          {/* X — mesma posição do hamburger: right-4 (px-4), top centrado com py-2 + h-10 do btn */}
          <Button
            variant='ghost'
            onClick={onToggle}
            aria-label="Fechar menu"
            className={cn(
              'fixed z-1001 md:hidden',
              'right-2.5 sm:right-8',
              'top-2',
              'flex items-center justify-center w-10 h-10',
              'text-foreground rounded-md hover:bg-accent transition-colors',
              open
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            )}
          >
            <X size={30} />
          </Button>

          {/* Overlay */}
          <div
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
            className={cn(
              'fixed inset-0 z-1000 bg-background md:hidden',
              'flex flex-col items-center justify-center gap-8 overflow-hidden',
              'transition-opacity duration-300 ease-in-out',
              open
                ? 'opacity-100 visible pointer-events-auto'
                : 'opacity-0 invisible pointer-events-none'
            )}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="font-bebas text-[3rem] text-foreground tracking-[0.08em] hover:text-muted-foreground transition-colors duration-200"
              >
                {label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 w-[90%]">
              <Button asChild size="lg" className="mt-4 tracking-[0.12em] uppercase font-bold font-condensed">
                <Link href="/#cta-section" onClick={onClose}>
                  Orçamento Grátis
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="tracking-[0.12em] uppercase font-condensed gap-2">
                <Link href="/agendar" onClick={onClose}>
                  Agendar Mudança <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}