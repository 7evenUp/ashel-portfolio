import React from 'react'
import { SectionHeading } from '../../components'
import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <div className={styles.container}>
      <SectionHeading heading='My projects' />
    </div>
  )
}
