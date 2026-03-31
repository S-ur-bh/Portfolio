import { Experience } from '@/types'
import { FaAmazon, FaBuilding } from 'react-icons/fa'

export const experiences: Experience[] = [
  {
    id: 'amazon',
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    duration: 'July 2025 – December 2025',
    location: 'India',
    description: [
      'Developed GEN-5 Residential Locker workflows (Ingress, Pickup, Drop-off) using React.js and TypeScript; implemented 30+ functional views, global state management via hooks, and exception handling logic.',
      'Enhanced Java-based resident search in ALES (LockerEdgeService) by implementing substring, case-insensitive, and diacritic-insensitive matching using SQL normalization techniques.',
      'Migrated legacy Timber logging to AWS CloudWatch for critical services using Turtle credentials and IAM roles, reducing log query latency by 40% across NA, EU, and FE regions.',
      'Resolved DOGMA compliance risks for 6+ pipelines by integrating AWS CDK monitors and automated rollback mechanisms, achieving "Full CD" status for the ALUI pipeline.',
    ],
    techStack: ['React.js', 'TypeScript', 'Java', 'Spring Boot', 'AWS CloudWatch', 'AWS CDK', 'Derby DB'],
    logo: FaAmazon,
    completionLetterUrl: '/Portfolio/Amazon Intern Completion Letter.pdf',
  },
  {
    id: 'bizzplus',
    company: 'Bizz+ Labs, Qunova Tech',
    role: 'Full Stack Developer Intern',
    duration: '2024',
    location: 'Remote',
    description: [
      'Built a real-time analytics dashboard with Next.js, React, & Aceternity UI, reducing manual reporting by 35% using MongoDB aggregation.',
      'Designed secure profiles for distributors/manufacturers using TypeScript & PostgreSQL, ensuring data integrity.',
      'Added OTP-based authentication with React & Node.js, cutting unauthorized access by 40%.',
      'Engineered a real-time chat system with Socket.io & Framer Motion for seamless interactions, using MongoDB for history and Tailwind CSS for responsiveness, boosting engagement by 30%.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Socket.io', 'Node.js'],
    logo: FaBuilding,
    completionLetterUrl: '/Portfolio/Bizz+ Labs Experience Letter.pdf',
  },
]