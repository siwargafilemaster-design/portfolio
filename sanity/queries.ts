import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  _id, title, featured, order, description, usage,
  role, tech, liveUrl, githubUrl, isPrivate,
  "videoUrl": video.asset->url
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  name, title, tagline, openToWork, location,
  aboutIntro, aboutPull, aboutOutro, skills,
  email, github, linkedin,
  "photoUrl": photo.asset->url
}`