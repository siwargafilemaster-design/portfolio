export type Project = {
  _id: string
  title: string
  featured?: boolean
  order?: number
  description?: string
  usage?: string
  role?: string
  tech?: string[]
  liveUrl?: string
  githubUrl?: string
  isPrivate?: boolean
  videoUrl?: string
}

export type SkillGroup = {
  heading?: string
  items?: string[]
}

export type SiteSettings = {
  name?: string
  title?: string
  tagline?: string
  openToWork?: boolean
  location?: string
  aboutIntro?: string
  aboutPull?: string
  aboutOutro?: string
  skills?: SkillGroup[]
  email?: string
  github?: string
  linkedin?: string
  photoUrl?: string
}