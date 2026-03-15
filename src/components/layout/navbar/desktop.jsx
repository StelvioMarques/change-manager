/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from './data'
import { ArrowUpRight } from 'lucide-react'

export function NavbarDesktop() {
  return (
    <div className="hidden md:flex items-center gap-8 lg:gap-5">
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-muted-foreground text-xs font-medium tracking-[0.12em] uppercase hover:text-foreground transition-colors duration-200"
        >
          {label}
        </Link>
      ))}

      <div className='flex flex-col md:flex-row gap-2'>
        <Button asChild size="lg" className="tracking-[0.12em] uppercase h-8 font-condensed">
          <a href="/#cta-section">Orçamento Grátis</a>
        </Button>

        <Button asChild size="lg" variant='outline' className="tracking-[0.12em] uppercase h-8 font-condensed flex flex-col md:flex-row gap-2">
          <Link href="/agendar">
            Agendar Mudança <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </div>
  )
}