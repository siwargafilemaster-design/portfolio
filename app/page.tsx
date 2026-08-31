import { client } from '@/sanity/client'
import { projectsQuery, siteSettingsQuery } from '@/sanity/queries'
import type { Project } from '@/sanity/types'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export const revalidate = 60

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
      <Projects projects={projects} />
    </>
  )
}
