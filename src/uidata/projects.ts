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
    img: 'project-ashel-blog.png',
    heading: 'Ashel website',
    subheading: 'My own blog and gallery website',
    date: 'June 2022',
    stack: ['Next.js', 'Firebase', 'Lexical'],
    links: [
      {
        label: 'Preview',
        href: 'https://ashel.vercel.app/'
      },
      {
        label: 'Source',
        href: 'https://github.com/7evenUp/ashel'
      }
    ],
    description: 'I created this project from scratch: design, frontend, admin panel. One of cool features is text editor built with Lexical.'
  },
  {
    img: 'project-ashel-portfolio.png',
    heading: 'Ashel portfolio',
    subheading: 'It\'s your current page by the way',
    date: 'July 2022',
    stack: ['React', 'Framer-motion', 'Sass', 'React-router-dom v6'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/7evenUp/ashel-portfolio'
      }
    ],
    description: 'Every self taught developer needs a portfolio, and I am no exception. It is simply beautiful website representing my skills and projects.'
  },

]