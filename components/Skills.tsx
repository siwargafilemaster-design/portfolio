import type { SkillGroup } from '@/sanity/types'

export default function Skills({ groups }: { groups?: SkillGroup[] }) {
  if (!groups?.length) return null

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
        Skills · from real projects
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.heading} className="rounded-2xl border border-line bg-white p-5">
            <h4 className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
              {g.heading}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {g.items?.map((it) => (
                <span key={it} className="rounded-full border border-line bg-paper-2 px-2.5 py-1 text-sm font-medium text-ink">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}