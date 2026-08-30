import { client } from '@/sanity/client'
import { projectsQuery, siteSettingsQuery } from '@/sanity/queries'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'

export const revalidate = 60

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

type Settings = {
  name?: string
  title?: string
  tagline?: string
  openToWork?: boolean
  photoUrl?: string
}

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch<Project[]>(projectsQuery),
    client.fetch<Settings>(siteSettingsQuery),
  ])

  return (
    <>
      <TopBar />
      <Hero
        name={settings?.name}
        title={settings?.title}
        tagline={settings?.tagline}
        openToWork={settings?.openToWork}
        photoUrl={settings?.photoUrl}
      />

      {/* Projects masih polos — akan didandani di Phase 4 */}
      <main style={{ maxWidth: 720, margin: '0 auto', padding: 24, lineHeight: 1.6 }}>
        <h2>Projects ({projects.length})</h2>
        {projects.map((p) => (
          <div key={p._id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <h3>{p.title} {p.featured ? '⭐' : ''}</h3>
            <p style={{ color: '#666' }}>{p.usage}</p>
            <p>{p.description}</p>
            <p style={{ fontSize: 13, color: '#444' }}>{p.tech?.join(' · ')}</p>
          </div>
        ))}
      </main>
    </>
  )
}
