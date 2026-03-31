import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'travelling-postman',
    title: 'Travelling Postman',
    description: 'Dynamic Mail Transmission System for India Post using Next.js and PostgreSQL. Optimized multi-modal routing with A* algorithm and real-time data analysis, reducing delivery time by 30%. Integrated self-learning algorithms to assess node safety using weather, news, and social media insights.',
    techStack: ['Next.js', 'React.js', 'Python', 'PostgreSQL', 'Machine Learning'],
    demoUrl: 'https://travelling-postman-3hl4.vercel.app/',
    featured: true,
    span: 'col-span-2',
  },
  {
    id: 'snapgram',
    title: 'Snapgram',
    description: 'Social media application with ReactJS and TypeScript, ensuring scalability. Implemented authentication, database management, and storage using Appwrite, boosting security by 40%.',
    techStack: ['React.js', 'TypeScript', 'Appwrite', 'Tailwind CSS'],
    demoUrl: 'https://snapgram-ashy-zeta.vercel.app/',
    span: 'col-span-1',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Modern portfolio website built with React 18, TypeScript, and Tailwind CSS. Features include Framer Motion animations, inline PDF viewing for resumes and completion letters, infinite scroll skill marquee, and responsive design with smooth page transitions.',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    demoUrl: '#',
    featured: true,
    span: 'col-span-1',
  },
]