import { Skill } from '@/types'
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSocketdotio,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiAppwrite,
  SiTensorflow,
} from '@icons-pack/react-simple-icons'

// Use a placeholder for skills without direct icon support
const PlaceholderIcon = SiC

export const skills: Skill[] = [
  // Languages
  { name: 'C', category: 'languages', icon: SiC },
  { name: 'C++', category: 'languages', icon: SiCplusplus },
  { name: 'Python', category: 'languages', icon: SiPython },
  { name: 'Java', category: 'languages', icon: PlaceholderIcon },
  { name: 'JavaScript', category: 'languages', icon: SiJavascript },
  { name: 'TypeScript', category: 'languages', icon: SiTypescript },

  // Frontend
  { name: 'React.js', category: 'frontend', icon: SiReact },
  { name: 'Next.js', category: 'frontend', icon: SiNextdotjs },
  { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss },
  { name: 'HTML5', category: 'frontend', icon: SiHtml5 },
  { name: 'CSS3', category: 'frontend', icon: SiCss },
  { name: 'Framer Motion', category: 'frontend', icon: SiFramer },

  // Backend
  { name: 'Node.js', category: 'backend', icon: SiNodedotjs },
  { name: 'Express.js', category: 'backend', icon: SiExpress },
  { name: 'Spring Boot', category: 'backend', icon: SiSpringboot },
  { name: 'Socket.io', category: 'backend', icon: SiSocketdotio },

  // Database
  { name: 'MySQL', category: 'database', icon: SiMysql },
  { name: 'PostgreSQL', category: 'database', icon: SiPostgresql },
  { name: 'MongoDB', category: 'database', icon: SiMongodb },
  { name: 'Derby DB', category: 'database', icon: PlaceholderIcon },

  // Tools
  { name: 'Git', category: 'tools', icon: SiGit },
  { name: 'GitHub', category: 'tools', icon: SiGithub },
  { name: 'Docker', category: 'tools', icon: SiDocker },
  { name: 'Kubernetes', category: 'tools', icon: SiKubernetes },
  { name: 'AWS', category: 'tools', icon: PlaceholderIcon },
  { name: 'Linux', category: 'tools', icon: SiLinux },
  { name: 'Appwrite', category: 'tools', icon: SiAppwrite },

  // Other
  { name: 'Machine Learning', category: 'other', icon: SiTensorflow },
  { name: 'TensorFlow', category: 'other', icon: SiTensorflow },
]