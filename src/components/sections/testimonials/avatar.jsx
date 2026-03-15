import { cn } from '@/lib/utils'

export function Avatar({ initials, small = false }) {
  return (
    <div className={cn(
      'rounded-full bg-accent border border-border',
      'flex items-center justify-center shrink-0',
      'font-condensed font-bold text-muted-foreground',
      small ? 'w-8 h-8 text-[0.75rem]' : 'w-10 h-10 text-[0.85rem]',
    )}>
      {initials}
    </div>
  )
}