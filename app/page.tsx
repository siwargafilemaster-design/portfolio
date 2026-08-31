import { client } from '@/sanity/client'
import { projectsQuery, siteSettingsQuery } from '@/sanity/queries'
import type { Project, SiteSettings } from '@/sanity/types'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'

export const revalidate = 60

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings>(siteSettingsQuery),
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
      <Reveal><Projects projects={projects} /></Reveal>
      <Reveal><About intro={settings?.aboutIntro} pull={settings?.aboutPull} outro={settings?.aboutOutro} /></Reveal>
      <Reveal><Skills groups={settings?.skills} /></Reveal>
      <Reveal>
        <Contact
          email={settings?.email}
          github={settings?.github}
          linkedin={settings?.linkedin}
          location={settings?.location}
        />
      </Reveal>
    </>
  )
}
