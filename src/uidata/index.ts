export type Skill = {
  name: string
  level: 'skilled' | 'beginner'
}

type SkillsList = 'frontend' | 'backend' | 'mobile'

export type DataType = Record<SkillsList, Skill[]>

export const uidata: DataType = {
  frontend: [
    {
      name: 'React',
      level: 'skilled'
    },
    {
      name: 'Redux toolkit',
      level: 'skilled'
    },
    {
      name: 'Tailwind CSS',
      level: 'beginner'
    },
    {
      name: 'Next.js',
      level: 'skilled'
    }
  ],
  backend: [
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
  ],
  mobile: [
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
}