import React from 'react'
import { Skill } from '../../uidata'
import styles from './SkillItem.module.scss'

export default function SkillItem({name, level}: Skill) {
  return (
    <li className={styles.container}>
      <span className={`${styles.circle} ${level === 'beginner' ? styles.circle_beginner : styles.circle_skilled}`} />
      <span className={styles.label}>{name}</span>
    </li>
  )
}
