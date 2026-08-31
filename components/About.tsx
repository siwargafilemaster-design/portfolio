export default function About({
  intro,
  pull,
  outro,
}: {
  intro?: string
  pull?: string
  outro?: string
}) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
        About
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="max-w-[70ch]">
        {intro && <p className="text-lg text-ink-soft">{intro}</p>}
        {pull && (
          <p className="my-6 border-l-[3px] border-brass pl-5 font-display text-xl font-medium leading-snug tracking-tight text-ink">
            {pull}
          </p>
        )}
        {outro && <p className="text-lg text-ink-soft">{outro}</p>}
      </div>
    </section>
  )
}