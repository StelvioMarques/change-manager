'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NavbarDesktop } from './desktop'
import { NavbarMobile } from './mobile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50',
        'flex items-center justify-between',
        'px-4 py-2 sm:px-8 lg:px-16 lg:py-2',
        'border-b border-transparent bg-background/0 text-foreground',
        'transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled && 'bg-background/90 backdrop-blur-md border-border'
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-foreground font-bebas text-[1.75rem] tracking-[0.08em] relative z-10"
      >
        CRARM XPRESS
      </Link>

      {/* Desktop */}
      <NavbarDesktop />

      {/* Mobile */}
      <NavbarMobile
        open={open}
        onToggle={() => setOpen(o => !o)}
        onClose={() => setOpen(false)}
      />
    </header>
  )
}