interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Personal Blog',
    description: `A modern, responsive blog built with Next.js, Tailwind CSS, and MDX. Features include dark mode, 
    tags, search functionality, and optimized performance.`,
    imgSrc: '/static/images/projects/site.png',
    href: 'https://tony-nyagah.github.io',
  },
  // Add more projects in this format:
  // {
  //   title: 'Project Name',
  //   description: 'Project description that explains what the project does and what technologies were used.',
  //   imgSrc: '/static/images/projects/project-image.jpg', // 16:9 ratio recommended
  //   href: 'https://github.com/your-username/project-repo',
  // },
]

export default projectsData
