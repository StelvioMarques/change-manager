'use client'

export function initCursor() {
  const cur   = document.getElementById('cursor')
  const trail = document.getElementById('cursor-trail')
  if (!cur || !trail) return

  let mx = 0, my = 0, tx = 0, ty = 0
  const { gsap } = window

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY
    gsap.set(cur, { x: mx, y: my })
  })

  gsap.ticker.add(() => {
    tx += (mx - tx) * 0.11
    ty += (my - ty) * 0.11
    gsap.set(trail, { x: tx, y: ty })
  })

  document.querySelectorAll('a, button, .service-card, .test-card, .test-card-sm, .why-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cur,   { width: 5,  height: 5,  duration: 0.2 })
      gsap.to(trail, { width: 56, height: 56, borderColor: 'rgba(255,255,255,.35)', duration: 0.2 })
    })
    el.addEventListener('mouseleave', () => {
      gsap.to(cur,   { width: 10, height: 10, duration: 0.2 })
      gsap.to(trail, { width: 34, height: 34, borderColor: 'rgba(255,255,255,.25)', duration: 0.2 })
    })
  })
}

export function initHeroAnimations() {
  const { gsap } = window
  const heroTl = gsap.timeline({ delay: 0.2 })
  heroTl
    .from('#line1 span', { y: '105%', duration: 0.85, ease: 'power4.out' })
    .from('#line2 span', { y: '105%', duration: 0.85, ease: 'power4.out' }, '-=.65')
    .from('#line3 span', { y: '105%', duration: 0.85, ease: 'power4.out' }, '-=.65')
    .to('#hero-eyebrow', { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' }, '-=.35')
    .to('#hero-sub',     { opacity: 1,        duration: 0.7, ease: 'power3.out' }, '-=.3')
    .to('#hero-ctas',    { opacity: 1,        duration: 0.6, ease: 'power3.out' }, '-=.3')
    .to('#hero-stats',   { opacity: 1,        duration: 0.7, ease: 'power3.out' }, '-=.4')
    .to('#scroll-ind',   { opacity: 1,        duration: 0.5 }, '-=.2')
}

export function initHeroParallax(isMobile) {
  const { gsap, ScrollTrigger } = window

  ScrollTrigger.create({
    trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.8,
    onUpdate: self => {
      const p = self.progress
      gsap.set('#truck-main',  { x: p * 60,  opacity: 0.07 * (1 - p * 0.6) })
      gsap.set('#boxes-group', { x: -p * 40, opacity: 0.05 * (1 - p * 0.5) })
      gsap.set('#pin-group',   { y: p * -30 })
    }
  })

  if (!isMobile) {
    document.addEventListener('mousemove', e => {
      const xp = (e.clientX / innerWidth  - 0.5) * 20
      const yp = (e.clientY / innerHeight - 0.5) * 12
      gsap.to('#truck-main',  { x: xp * 0.6,  y: yp * 0.4, duration: 1.8, ease: 'power1.out' })
      gsap.to('#boxes-group', { x: -xp * 0.4, y: yp * 0.3, duration: 2,   ease: 'power1.out' })
      gsap.to('#pin-group',   { x: xp * 0.3,  y: yp * 0.5, duration: 2.2, ease: 'power1.out' })
    })
  }
}

export function initCounters() {
  const { gsap, ScrollTrigger } = window
  function animCounter(el) {
    const t = +el.dataset.target
    gsap.fromTo({ v: 0 }, { v: t }, {
      v: t, duration: 2, ease: 'power2.out',
      onUpdate: function () {
        el.textContent = Math.round(this.targets()[0].v).toLocaleString('pt-PT')
      }
    })
  }
  ScrollTrigger.create({
    trigger: '#hero-stats', start: 'top 85%', once: true,
    onEnter: () => document.querySelectorAll('.count-up').forEach(animCounter)
  })
}

export function initScrollReveals() {
  const { gsap, ScrollTrigger } = window

  gsap.utils.toArray('.section-label, .section-title').forEach(el => {
    gsap.from(el, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 82%', once: true } })
  })

  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, { y: 40, opacity: 0, duration: 0.65, delay: (i % 3) * 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 87%', once: true } })
  })

  gsap.utils.toArray('.step').forEach((step, i) => {
    gsap.from(step, { y: 30, opacity: 0, duration: 0.65, delay: i * 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '#process', start: 'top 72%', once: true } })
  })

  gsap.utils.toArray('.why-item').forEach((item, i) => {
    gsap.from(item, { x: -20, opacity: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: item, start: 'top 85%', once: true } })
  })

  gsap.from('.test-card', { x: -40, opacity: 0, duration: 0.85, ease: 'power3.out',
    scrollTrigger: { trigger: '#testimonials', start: 'top 75%', once: true } })

  gsap.utils.toArray('.test-card-sm').forEach((t, i) => {
    gsap.from(t, { x: 30, opacity: 0, duration: 0.65, delay: i * 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '#testimonials', start: 'top 75%', once: true } })
  })

  gsap.from('.cta-inner > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: { trigger: '#cta-section', start: 'top 78%', once: true } })
}