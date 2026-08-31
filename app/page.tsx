import { client } from '@/sanity/client'
import { projectsQuery, siteSettingsQuery } from '@/sanity/queries'
import type { Project, SiteSettings } from '@/sanity/types'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

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
      <Projects projects={projects} />
      <About intro={settings?.aboutIntro} pull={settings?.aboutPull} outro={settings?.aboutOutro} />
      <Skills groups={settings?.skills} />
      <Contact
        email={settings?.email}
        github={settings?.github}
        linkedin={settings?.linkedin}
        location={settings?.location}
      />
    </>
  )
}
