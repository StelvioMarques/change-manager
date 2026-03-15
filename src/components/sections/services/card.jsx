import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ServiceCard({ svc, index: i, total }) {
  const isLastCol2 = i % 2 === 1
  const isLastCol3 = i % 3 === 2
  const isLastRow2 = i >= total - 2
  const isLastRow3 = i >= total - 3

  return (
    <div
      className={cn(
        'service-card p-7 border-border',
        // mobile: border-b em todos exceto o último
        i < total - 1 && 'border-b',
        // sm (2 cols)
        !isLastCol2 ? 'sm:border-r' : 'sm:border-r-0',
        !isLastRow2 ? 'sm:border-b' : 'sm:border-b-0',
        // lg (3 cols)
        !isLastCol3 ? 'lg:border-r' : 'lg:border-r-0',
        !isLastRow3 ? 'lg:border-b' : 'lg:border-b-0',
      )}
    >
      {/* Number */}
      <p className="font-bebas text-accent text-[0.85rem] tracking-[0.15em] mb-5 sm:mb-7">
        {svc.num}
      </p>

      {/* Icon */}
      <div className="w-10 h-10 mb-4 sm:mb-5 flex items-center justify-center">
        <svg
          viewBox="0 0 28 28"
          className="w-6 h-6 fill-none svc-icon-svg"
          style={{
            stroke: 'var(--muted-foreground)',
            strokeWidth: 1.2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            transition: 'stroke 0.3s',
          }}
        >
          {svc.icon}
        </svg>
      </div>

      {/* Name */}
      <p className="font-condensed font-bold uppercase tracking-[0.07em] text-foreground text-[1.05rem] mb-2">
        {svc.name}
      </p>

      {/* Description */}
      <p className="text-muted-foreground leading-[1.75] text-[0.84rem]">
        {svc.desc}
      </p>

      {/* Arrow */}
      <span className="svc-arrow inline-block mt-5 sm:mt-6 text-muted-foreground">
        <ArrowRight size={15} />
      </span>
    </div>
  )
}