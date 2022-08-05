import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
}

export default function Button({children}: ButtonProps) {
  return (
    <div className={styles.button}>
      {children}
    </div>
  )
}
