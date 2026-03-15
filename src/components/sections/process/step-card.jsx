import { cn } from '@/lib/utils'

export function StepCard({ step, index: i, total }) {
  const isLast = i === total - 1
  const isLastSm = i % 2 === 1
  const isLastRow2 = i >= total - 2

  return (
    <div
      className={cn(
        'step group p-10 sm:p-8 border-border bg-background',
        // mobile: border-b em todos exceto último
        !isLast && 'border-b',
        // sm (2 cols)
        !isLastSm ? 'sm:border-r' : 'sm:border-r-0',
        !isLastRow2 ? 'sm:border-b' : 'sm:border-b-0',
        // md (4 cols): sempre border-r exceto último
        !isLast ? 'md:border-r' : 'md:border-r-0',
        'md:border-b-0',
      )}
    >
      {/* Number */}
      <p className="step-num font-bebas text-[4rem] leading-none mb-6 tracking-[0.02em] text-accent transition-colors duration-300">
        {step.num}
      </p>

      {/* Dot */}
      <div className="w-2 h-2 rounded-full bg-accent border border-ring mb-5" />

      {/* Title */}
      <p className="font-condensed font-bold uppercase tracking-[0.08em] text-foreground text-base mb-3">
        {step.title}
      </p>

      {/* Description */}
      <p className="text-muted-foreground leading-[1.75] text-[0.83rem]">
        {step.desc}
      </p>
    </div>
  )
}