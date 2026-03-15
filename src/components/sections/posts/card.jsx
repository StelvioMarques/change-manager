import { cn } from '@/lib/utils'
import { CAT_LABELS } from './data'
import { ArrowRight, Calendar, Star, Tag } from 'lucide-react'

export function PostCard({ post, bentoClass }) {
  return (
    <article
      className={cn('post-card group relative overflow-hidden bg-background border border-border flex flex-col', bentoClass)}
      data-cat={post.cat}
    >
      {/* Hover wipe */}
      <div className="
        absolute inset-0 bg-muted z-0
        scale-x-0 origin-left
        transition-transform duration-420 ease-[cubic-bezier(.77,0,.18,1)]
        group-hover:scale-x-100
      "/>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-7 lg:p-8 gap-3">

        {/* Badge */}
        {post.badge && (
          <span className={cn(
            'w-fit inline-flex items-center gap-1',
            'font-condensed text-[0.58rem] font-bold tracking-[0.18em] uppercase',
            'px-2 py-0.5 rounded-sm bg-foreground text-background',
          )}>
            <Star size={9} fill="currentColor" strokeWidth={0} />
            {post.badge}
          </span>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-muted-foreground/50">
            <Tag size={10} strokeWidth={2} />
            {CAT_LABELS[post.cat]}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.62rem] tracking-[0.08em] text-muted-foreground/50">
            <Calendar size={10} strokeWidth={2} />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            'font-bebas text-foreground leading-[1.08] tracking-[0.02em] transition-colors duration-200',
            post.featured
              ? 'text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem]'
              : 'text-[1.35rem] sm:text-[1.5rem]',
          )}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[0.83rem] text-muted-foreground leading-[1.75] font-light flex-1">
          {post.excerpt}
        </p>

        {/* CTA */}

        <a href="#"
          className={cn(
            'inline-flex items-center gap-2 mt-3 w-fit',
            'font-condensed text-[0.72rem] font-bold tracking-[0.12em] uppercase',
            'text-muted-foreground no-underline',
            'transition-all duration-200 group-hover:text-foreground group-hover:gap-3',
          )}
        >
          Ler mais
          <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  )
}