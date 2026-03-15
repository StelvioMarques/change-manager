const ITEMS = [
  'Residencial','Empresarial','Internacional',
  'Embalagem Profissional','Armazenagem',
  'Montagem de Mobiliário','Piano & Obras de Arte','Seguro Completo',
]
const ALL = [...ITEMS, ...ITEMS] // duplicate for seamless loop

export default function Marquee() {
  return (
    <div className="overflow-hidden border py-[0.85rem] bg-background border-b-0">
      <div className="flex whitespace-nowrap animate-marquee">
        {ALL.map((item, i) => (
          <div
            key={i}
            className="shrink-0 font-bebas text-[1.1rem] text-muted-foreground tracking-widest px-8 flex items-center gap-8"
          >
            {item}
            <span className="w-1 h-1 bg-gray1 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}