export default function Contact({
  email,
  github,
  linkedin,
  location,
}: {
  email?: string
  github?: string
  linkedin?: string
  location?: string
}) {
  return (
    <footer id="contact" className="bg-night text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-[#7f8caa]">
          Contact
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-[#B9C4D8]">
          Open to remote junior developer roles, worldwide. The fastest way to reach me:
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3 font-mono text-sm font-medium">
          {email && (
            <a href={`mailto:${email}`} className="rounded-full border border-night-line bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
              ✉ Email
            </a>
          )}
          {github && (
            <a href={github} target="_blank" className="rounded-full border border-night-line bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" className="rounded-full border border-night-line bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
              LinkedIn
            </a>
          )}
          {location && (
            <span className="rounded-full border border-night-line bg-white/5 px-5 py-3 text-[#B9C4D8]">
              📍 {location}
            </span>
          )}
        </div>
        <p className="mt-10 font-mono text-xs text-[#6b7793]">
          © 2026 Edi Susilo · Next.js + Sanity
        </p>
      </div>
    </footer>
  )
}