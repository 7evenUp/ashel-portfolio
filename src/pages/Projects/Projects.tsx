import React from 'react'
import { Footer, SectionHeading } from '../../components'
import Project from '../../components/Project/Project'
import { projects } from '../../uidata/projects'
import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <div className={styles.container}>
      <SectionHeading heading='My projects' />

      <div className='projects'>
        {projects.map((project, i) => <Project key={i} {...project} />)}
      </div>

      <Footer />
    </div>
  )
}
