import React from 'react'
import { IProject } from '../../uidata/projects'
import styles from './Project.module.scss'

const Project = ({heading}: IProject) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
    </div>
  )
}

export default Project
