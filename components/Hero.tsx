import Image from 'next/image'

type HeroProps = {
  name?: string
  title?: string
  tagline?: string
  openToWork?: boolean
  photoUrl?: string
}

export default function Hero({ name, title, tagline, openToWork, photoUrl }: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-night text-white">
      <div className="grid-glow pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.3fr_0.9fr] md:py-20">
        <div>
          {openToWork && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-night-line bg-nila/15 px-3 py-1.5 font-mono text-xs text-[#CFE0FF]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to remote opportunities · Worldwide
            </span>
          )}
          <h1 className="font-display text-5xl font-extrabold leading-[0.96] tracking-tight md:text-7xl">
            {name}
          </h1>
          <div className="mt-3 font-mono text-sm text-nila-bright">// {title}</div>
          <p className="mt-5 max-w-md text-[#C3CDDF]">{tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-brass px-6 py-3 font-semibold text-[#20180A] transition hover:-translate-y-0.5">
              View Projects →
            </a>
            <a href="#contact" className="rounded-full border border-night-line px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5">
              Contact Me
            </a>
          </div>
        </div>

        {photoUrl && (
          <div className="mx-auto">
            <Image
              src={photoUrl}
              alt={name ?? 'Photo'}
              width={290}
              height={348}
              priority
              className="rounded-2xl border border-night-line object-cover shadow-2xl"
            />
          </div>
        )}
      </div>
    </header>
  )
}