import { Skill } from '@/types'

export const skills: Skill[] = [
  // Languages
  { name: 'C', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },

  // Frontend
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Socket.io', category: 'backend' },

  // Database
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Derby DB', category: 'database' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Kubernetes', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'Appwrite', category: 'tools' },

  // Other
  { name: 'Machine Learning', category: 'other' },
  { name: 'TensorFlow', category: 'other' },
]

export const skillCategories = [
  { id: 'languages', label: 'Languages', color: 'from-blue-500 to-cyan-500' },
  { id: 'frontend', label: 'Frontend', color: 'from-purple-500 to-pink-500' },
  { id: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
  { id: 'database', label: 'Database', color: 'from-orange-500 to-yellow-500' },
  { id: 'tools', label: 'Tools', color: 'from-red-500 to-orange-500' },
  { id: 'other', label: 'Other', color: 'from-indigo-500 to-purple-500' },
]
