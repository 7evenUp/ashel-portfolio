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
    img: "project_images/project-open-academy.png",
    heading: "Open Academy",
    subheading: "Learning platform with crypto courses",
    date: "October 2025",
    stack: [
      "React",
      "Vite",
      "Redux toolkit",
      "RTK Query",
      "Tanstack Router",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: [
      {
        label: "Telegram Mini App",
        href: "https://t.me/nutsfarm_bot/learn",
      },
      {
        label: "Web",
        href: "https://academy.crypton.xyz/library",
      },
    ],
    description:
      "Learning platform implemented as TMA and website. You are able to learn about crypto, create own courses (if you are admin ofc), complete tasks and earn internal platform currency",
  },
  {
    img: "project_images/project-nutsfarm.jpg",
    heading: "Nutsfarm",
    subheading: "pre Open Academy",
    date: "September 2024",
    stack: [
      "React",
      "Vite",
      "RTK Query",
      "TailwindCSS",
      "Framer Motion",
      "CryptoJS (AES)",
    ],
    links: [
      {
        label: "Project's roadmap",
        href: "https://t.me/nutsfarm/33",
      },
    ],
    description:
      "EdFi project implemented as Telegram Mini App. You could start learning about crypto with Duolingo style. Also there was gamification (puzzles, wordly, pairs), stories, battlepass. Implemented TON and Telegram Stars payments",
  },
  {
    img: "project_images/project-nutcrackers.png",
    heading: "Nutcrackers NFT",
    subheading: "Website representing our NFT collection",
    date: "February 2024",
    stack: [
      "Vue",
      "Vite",
      "Pinia",
      "Axios",
      "GSAP",
      "TailwindCSS",
      "Radix-vue",
      "@ton",
    ],
    links: [
      {
        label: "Deploy",
        href: "https://nutcrackers.crypton.xyz/",
      },
    ],
    description:
      "Information about our NFT collection with ability to connect TON wallet and mint NFT",
  },
  {
    img: "project_images/project-in-prime.png",
    heading: "In Prime",
    subheading: "Landing page",
    date: "November 2023",
    stack: [
      "NextJS",
      "Tanstack Query",
      "Axios",
      "Framer Motion",
      "SCSS",
      "Radix-UI",
      "Embla",
    ],
    links: [
      {
        label: "Deploy",
        href: "https://in-prime.crypton.xyz/",
      },
    ],
    description:
      "Information about business product with ability to buy subscription in a couple of clicks",
  },
  {
    img: "project_images/project-x-landing.png",
    heading: "X Program",
    subheading: "Landing page",
    date: "September 2023",
    stack: ["React", "Vite", "Framer Motion", "SCSS", "Radix-UI", "Nginx"],
    links: [
      {
        label: "Deploy",
        href: "https://x-program.crypton.xyz/",
      },
    ],
    description: "Simple langing page with cool animations",
  },
  {
    img: "project_images/project-id.png",
    heading: "ID Crypton",
    subheading: "It is an entry point into Crypton ecosystem",
    date: "August 2023",
    stack: ["React", "Vite", "RTK Query", "Radix-UI", "TailwindCSS"],
    links: [
      {
        label: "Deploy",
        href: "https://id.crypton.xyz/",
      },
    ],
    description:
      "Here you can manage profile settings, connect and link EVM and TON wallets, top up balance and buy subscription, navigate the entire ecosystem with ease",
  },
  {
    img: "project_images/project-m3-dashboard.png",
    heading: "Dashboard template",
    subheading: "It is a simple dashboard template with M3 design system",
    date: "July 2023",
    stack: ["Ashel M3 Kit", "Material Design V3"],
    links: [
      {
        label: "Deploy",
        href: "https://dashboard-m3.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/7evenUp/dashboard-m3",
      },
    ],
    description:
      "Website just showing how quickly you can create great UIs with both light and dark modes",
  },
  {
    img: "project_images/project-ashel-m3-kit.png",
    heading: "Ashel M3 Kit",
    subheading:
      "My own implementation of Material Design V3 components for React",
    date: "April 2023",
    stack: ["NextJS 13", "Radix-ui", "TailwindCSS", "cva"],
    links: [
      {
        label: "Deploy",
        href: "https://ashel-m3-kit.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/7evenUp/ashel-m3-kit",
      },
    ],
    description:
      "Website-documentation built with NextJS 13, UI components implemented mostly using @radix-ui according to Material Design V3 specs. Here you will find guides how to get started developing your future app with M3 components and style guides.",
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
