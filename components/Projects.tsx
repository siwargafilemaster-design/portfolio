import type { Project } from '@/sanity/types'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
        Selected Work · {projects.length} apps in production
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight">Real software, real users.</h2>
      <p className="mb-8 mt-1 text-sm text-muted">
        Each project includes a short screen recording — shown in a phone frame, since all four are built mobile-first.
      </p>

      {featured && <FeaturedProject p={featured} />}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p._id} p={p} />
        ))}
      </div>
    </section>
  )
}