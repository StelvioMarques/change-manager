'use client'
import { useState, useRef, useEffect } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { PostCard } from './card'
import { PostsFilters } from './filters'
import { POSTS } from './data'

function getBentoClass(post) {
  return post.featured ? 'sm:col-span-2 lg:col-span-2' : ''
}

export default function PostsGrid() {
  const [active, setActive] = useState('todos')
  const gridRef = useRef(null)

  const visible = active === 'todos' ? POSTS : POSTS.filter(p => p.cat === active)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.post-card')
    gsap.fromTo(cards,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', clearProps: 'transform' }
    )
  }, [active])

  useGSAP(() => {
    gsap.from(gridRef.current?.querySelectorAll('.post-card'), {
      y: 40, opacity: 0, duration: 0.65, stagger: 0.07, ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
    })
  }, { scope: gridRef })

  return (
    <div>
      <PostsFilters
        active={active}
        onSelect={setActive}
        count={visible.length}
      />

      <div className="px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 lg:px-16 lg:pt-10 lg:pb-28 max-w-330 mx-auto">
        {visible.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground/40 font-condensed tracking-[0.15em] uppercase text-[0.85rem]">
            Nenhum artigo nesta categoria ainda.
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {visible.map((post, i) => (
              <PostCard
                key={`${active}-${post.title}`}
                post={post}
                bentoClass={getBentoClass(post)}
                index={i}
                total={visible.length}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}