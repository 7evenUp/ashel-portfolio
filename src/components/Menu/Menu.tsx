import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link to='/' >About</Link>
      <Link to='/projects' >Projects</Link>
    </div>
  )
}
