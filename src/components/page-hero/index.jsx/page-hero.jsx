import { cn } from '@/lib/utils'
import SectionReveal from '@/components/SectionReveal'

export default function PageHero({ label, title, titleEm, meta }) {
  return (
    <section className="border-b border-border">
      <div className="pt-32 pb-12 px-4 sm:pt-36 sm:pb-14 sm:px-8 lg:pt-40 lg:pb-16 lg:px-16 max-w-330 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8">

          {/* Left — label + title */}
          <div>
            <SectionReveal
              tag="p"
              className={cn(
                'inline-flex items-center gap-2.5 mb-4',
                'text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-muted-foreground',
                'before:content-[""] before:w-5 before:h-px before:bg-muted-foreground',
              )}
            >
              {label}
            </SectionReveal>

            <SectionReveal
              tag="h1"
              className="font-bebas text-foreground leading-[0.9] tracking-[0.02em]"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
            >
              {title}
              {titleEm && <em className="stroke-title">{titleEm}</em>}
            </SectionReveal>
          </div>

          {/* Right — meta */}
          {meta && (
            <SectionReveal tag="div" className="hidden lg:block text-right pb-1">
              {meta.map((line) => (
                <p key={line} className="text-[0.7rem] text-muted-foreground tracking-[0.15em] uppercase leading-[1.8]">
                  {line}
                </p>
              ))}
            </SectionReveal>
          )}

        </div>
      </div>
    </section>
  )
}