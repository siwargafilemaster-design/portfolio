import type { Project } from '@/sanity/types'
import PhoneFrame from './PhoneFrame'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-xl">
      <PhoneFrame sub={p.usage} />
      <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{p.description}</p>
      <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-nila">
        <span className="h-1.5 w-1.5 rounded-full bg-nila" />{p.usage}
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {p.tech?.map((t) => (
          <span key={t} className="rounded-md border border-line bg-paper-2 px-2.5 py-1 font-mono text-[0.7rem] text-ink-soft">{t}</span>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted"><span className="font-semibold text-ink">Role:</span> {p.role}</p>
      <div className="mt-auto flex flex-wrap justify-center gap-4 pt-4 font-mono text-xs font-medium text-nila">
        {p.isPrivate ? (
          <span className="text-muted">◆ Private app</span>
        ) : (
          p.liveUrl && <a href={p.liveUrl} target="_blank" className="border-b border-transparent hover:border-nila">Live ↗</a>
        )}
        {p.githubUrl && <a href={p.githubUrl} target="_blank" className="border-b border-transparent hover:border-nila">GitHub ↗</a>}
      </div>
    </div>
  )
}