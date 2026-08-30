import { client } from '@/sanity/client'
import { projectsQuery, siteSettingsQuery } from '@/sanity/queries'

export const revalidate = 60 // cek konten baru tiap 60 detik

type Project = {
  _id: string
  title: string
  featured?: boolean
  usage?: string
  description?: string
  role?: string
  tech?: string[]
  liveUrl?: string
  githubUrl?: string
}

type Settings = { name?: string; title?: string; tagline?: string }

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch<Project[]>(projectsQuery),
    client.fetch<Settings>(siteSettingsQuery),
  ])

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: 24, lineHeight: 1.6 }}>
      <h1>{settings?.name}</h1>
      <p><strong>{settings?.title}</strong></p>
      <p>{settings?.tagline}</p>

      <hr style={{ margin: '24px 0' }} />
      <h2>Projects ({projects.length})</h2>

      {projects.map((p) => (
        <div key={p._id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 16 }}>
          <h3>{p.title} {p.featured ? '⭐' : ''}</h3>
          <p style={{ color: '#666' }}>{p.usage}</p>
          <p>{p.description}</p>
          <p style={{ fontSize: 14 }}><em>{p.role}</em></p>
          <p style={{ fontSize: 13, color: '#444' }}>{p.tech?.join(' · ')}</p>
          <p style={{ fontSize: 14 }}>
            {p.liveUrl && <a href={p.liveUrl}>Live</a>}
            {p.liveUrl && p.githubUrl && ' | '}
            {p.githubUrl && <a href={p.githubUrl}>GitHub</a>}
          </p>
        </div>
      ))}
    </main>
  )
}
