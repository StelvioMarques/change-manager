import { cn } from '@/lib/utils'
import { FILTERS } from './data'

export function PostsFilters({ active, onSelect, count }) {
  return (
    <div className="flex gap-2 flex-wrap items-center px-4 py-5 border-b border-border sm:px-8 sm:py-6 lg:px-16 max-w-330 mx-auto">
      {FILTERS.map(({ key, label, Icon }) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={cn(
            'inline-flex items-center gap-1.5',
            'font-condensed text-[0.72rem] font-semibold tracking-[0.15em] uppercase',
            'px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm border',
            'transition-all duration-200',
            active === key
              ? 'bg-foreground text-background border-foreground'
              : 'bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground',
          )}
        >
          {Icon && <Icon size={11} strokeWidth={2.5} />}
          {label}
        </button>
      ))}

      <span className="ml-auto text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground/50">
        {count} artigo{count !== 1 ? 's' : ''}
      </span>
    </div>
  )
}