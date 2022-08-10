import React from 'react'
import styles from './SectionHeading.module.scss'

const SectionHeading = ({heading}: {heading: string}) => (
  <h3 className={styles.section_heading}>{heading}</h3>
)

export default SectionHeading