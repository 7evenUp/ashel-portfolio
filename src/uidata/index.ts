export type Skill = {
  name: string
  level: 'skilled' | 'beginner'
}

type SkillsHeading = 'frontend' | 'backend' | 'mobile'

export type Field = {
  title: SkillsHeading
  img: string
  skills: Skill[]
}

export const fieldData: Field[] = [
  {
    title: 'frontend',
    img: 'images/frontend_illustration.png',
    skills: [
      {
        name: 'React',
        level: 'skilled'
      },
      {
        name: 'Next.js',
        level: 'skilled'
      },
      {
        name: 'Redux toolkit',
        level: 'skilled'
      },
      {
        name: 'Tailwind CSS',
        level: 'skilled'
      },
      {
        name: 'React Query',
        level: 'beginner'
      },
      {
        name: 'tRPC',
        level: 'beginner'
      }
    ]
  },
  {
    title: 'backend',
    img: 'images/backend_illustration.png',
    skills: [
      {
        name: 'node',
        level: 'skilled'
      },
      {
        name: 'express',
        level: 'skilled'
      },
      {
        name: 'nest',
        level: 'beginner'
      },
      {
        name: 'MongoDB',
        level: 'beginner'
      },
      
      {
        name: 'firebase',
        level: 'skilled'
      },
      {
        name: 'supabase',
        level: 'skilled'
      }
    ]
  },
  {
    title: 'mobile',
    img: 'images/mobile_illustration.png',
    skills: [
      {
        name: 'React-Native',
        level: 'skilled'
      },
      {
        name: 'flutter',
        level: 'beginner'
      },
      {
        name: 'Kotlin',
        level: 'beginner'
      },
    ]
  },
]