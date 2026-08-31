import type { Project } from '@/sanity/types'
import PhoneFrame from './PhoneFrame'

export default function FeaturedProject({ p }: { p: Project }) {
  return (
    <div className="relative mb-5 grid grid-cols-1 items-center gap-7 overflow-hidden rounded-2xl border border-line bg-white p-7 sm:grid-cols-[auto_1fr]">
      <div className="absolute left-0 top-0 h-full w-1 bg-brass" />
      <div className="mx-auto sm:mx-0">
        <PhoneFrame size="lg" sub={p.usage} videoUrl={p.videoUrl} />
      </div>
      
      <div className="text-center sm:text-left">
        <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-widest text-brass">★ Featured</span>
        <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-ink-soft">{p.description}</p>
        
        <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-nila">
          <span className="h-1.5 w-1.5 rounded-full bg-nila" />{p.usage}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:justify-start">
          {p.tech?.map((t) => (
            <span key={t} className="rounded-md border border-line bg-paper-2 px-2.5 py-1 font-mono text-xs text-ink-soft">{t}</span>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted"><span className="font-semibold text-ink">My role:</span> {p.role}</p>
        
        <div className="mt-4 flex flex-wrap justify-center gap-4 font-mono text-sm font-medium text-nila sm:justify-start">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" className="border-b border-transparent hover:border-nila">Live Demo ↗</a>}
          {p.githubUrl && <a href={p.githubUrl} target="_blank" className="border-b border-transparent hover:border-nila">GitHub ↗</a>}
        </div>

      </div>
    </div>
  )
}