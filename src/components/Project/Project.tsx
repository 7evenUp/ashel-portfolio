import React from 'react'
import { IProject } from '../../uidata/projects'
import styles from './Project.module.scss'

const Project = ({
  img,
  heading,
  subheading,
  date,
  stack,
  links,
  description
}: IProject) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={img} alt={heading}/>
      </div>
      
      <div className={styles.info}>
        <div className={styles.info_top}>
          <div className={styles.heading}>
            <h2>{heading}</h2>
            <span>{date}</span>
          </div>
          <p className={styles.subheading}>{subheading}</p>
        </div>
        <div className={styles.info_bottom}>
          <div className={styles.info_bottom_left}>
            <div>
              <h3 className={styles.info_heading}>Technologies</h3>
              <div className={styles.info_stack}>
                {stack.map((el, i) => <span key={i}>{el}</span>)}
              </div>
            </div>
            <div>
              <h3 className={styles.info_heading}>Links</h3>
              <div className={styles.info_links}>
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={'_blank'}
                    rel="noreferrer"
                  >{link.label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.info_bottom_right}>
            <h3 className={styles.info_heading}>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
