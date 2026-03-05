export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  image?: string
  demoUrl?: string
  codeUrl?: string
  featured?: boolean
  span?: 'col-span-1' | 'col-span-2'
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  description: string[]
  techStack?: string[]
}

export interface Skill {
  name: string
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  icon?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
