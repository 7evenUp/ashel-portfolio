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
    img: "project_images/project-ashel-ui-kit.png",
    heading: "Ashel UI Kit",
    subheading:
      "Website with documentation and implementation of Material Design V3 for web as React components",
    date: "April 2023",
    stack: ["Next 13", "Material V3", "Radix-ui", "TailwindCSS", "cva", "Next-themes"],
    links: [
      {
        label: "Deploy",
        href: "https://ashel-ui-kit.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/7evenUp/ashel-ui-kit",
      },
    ],
    description:
      "Website-documentation built with Next 13, UI components implemented mostly using @radix-ui according to Material Design V3 documentation. On that site you are able to see guides how to get started developing your future app with M3 design.",
  },
  {
    img: "project_images/project-text-similarity.png",
    heading: "Text Similarity API",
    subheading:
      "Website for creating API keys which enable usage of similarity API",
    date: "March 2023",
    stack: ["Next 13", "MUI", "Upstash", "Next-Auth", "Prisma", "TailwindCSS"],
    links: [
      {
        label: "Deploy",
        href: "https://text-similarity.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/7evenUp/text-similarity",
      },
    ],
    description:
      "Fullstack app built with Next 13, UI components built with @radix-ui, auth implemented using Next-Auth, chosen database is mysql from Planetscale, db management through prisma. Real world app which uses OpenAI API. You can read properly how to use app in README on github source page",
  },
  {
    img: "project_images/project-trading-plan.png",
    heading: "Trading Plan",
    subheading: "App for building trading strategy",
    date: "February 2023",
    stack: ["React", "Vite", "TailwindCSS", "Redux/toolkit", "Recharts"],
    links: [
      {
        label: "Deploy",
        href: "https://trading-plan.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/7evenUp/trading-plan",
      },
    ],
    description:
      "I do trading and I am so exhausted of using products with a free plan. So I decided to build an app for building trading strategies, backtesting, keeping records on my trades. It is in MVP mode right now",
  },
  {
    img: "project_images/project-ashel-blog.png",
    heading: "Ashel website",
    subheading: "My own blog and gallery website",
    date: "December 2022",
    stack: ["Next.js", "Supabase", "MDX", "TailwindCSS", "Prisma", "tRPC"],
    links: [
      {
        label: "Deploy",
        href: "https://www.ashel.site/",
      },
      {
        label: "Source",
        href: "https://github.com/7evenUp/ashel-blog",
      },
    ],
    description:
      "I created this project from scratch: design, frontend, backend, admin panel. Styles are written using tailwind. Photos stored on Supabase. Blog posts are written using MDX",
  },
  {
    img: "project_images/project-ashel-portfolio.png",
    heading: "Ashel portfolio",
    subheading: "It's your current page by the way",
    date: "July 2022",
    stack: ["React", "Framer-motion", "Sass", "React Router 6"],
    links: [
      {
        label: "Source",
        href: "https://github.com/7evenUp/ashel-portfolio",
      },
    ],
    description:
      "Every self taught developer needs a portfolio, and I am no exception. It is simply beautiful website representing my skills and projects.",
  },
]
