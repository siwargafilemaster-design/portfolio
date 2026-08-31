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
}