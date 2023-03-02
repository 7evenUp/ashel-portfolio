export interface IProject {
  img: string
  heading: string
  subheading: string
  date: string
  stack: Array<string>
  links: Array<{
    label: string
    href: string
  }>
  description: string
}


export const projects: Array<IProject> = [
  {
    img: 'project_images/project-trading-plan.png',
    heading: 'Trading Plan',
    subheading: 'App for building trading strategy',
    date: 'February 2023',
    stack: ['React', 'Vite', 'TailwindCSS', 'Vitest', 'Redux/toolkit'],
    links: [
      {
        label: 'Deploy',
        href: 'https://trading-plan.vercel.app/'
      },
      {
        label: 'Source',
        href: 'https://github.com/7evenUp/trading-plan'
      }
    ],
    description: 'I do trading and I am so exhausted of using products with free plan. So I decided to build an app for building trading strategies, backtesting, keeping records on my trades. It is in MVP mode right now'
  },
  {
    img: 'project_images/project-ashel-blog.png',
    heading: 'Ashel website',
    subheading: 'My own blog and gallery website',
    date: 'December 2022',
    stack: ['Next.js', 'Supabase', 'MDX', 'Tailwindcss', 'Prisma', 'tRPC'],
    links: [
      {
        label: 'Deploy',
        href: 'https://www.ashel.site/'
      },
      {
        label: 'Source',
        href: 'https://github.com/7evenUp/ashel-blog'
      }
    ],
    description: 'I created this project from scratch: design, frontend, backend, admin panel. Styles are written using tailwind. Photos stored on Supabase. Blog posts are written using MDX'
  },
  {
    img: 'project_images/project-ashel-portfolio.png',
    heading: 'Ashel portfolio',
    subheading: 'It\'s your current page by the way',
    date: 'July 2022',
    stack: ['React', 'Framer-motion', 'Sass', 'React Router 6'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/7evenUp/ashel-portfolio'
      }
    ],
    description: 'Every self taught developer needs a portfolio, and I am no exception. It is simply beautiful website representing my skills and projects.'
  }
]