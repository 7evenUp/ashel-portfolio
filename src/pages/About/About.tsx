import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import styles from './About.module.scss'

export default function About() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image_wrapper}>
          <figure>
            <img src={"#"} alt="handsome boy" />
          </figure>
        </div>
        <div className={styles.hero}>
            <h2 className={styles.hero_heading}>Frontend Developer</h2>
            <p className={styles.hero_desc}>I like to build creative products with great user experiences</p>
            <ul className={styles.hero_highlights}>
              <li>Over three years of building web tools and UI designs</li>
              <li>Highly skilled at creating products from scratch</li>
            </ul>
            <Button>
              <Link to='/projects'>See my works</Link>
            </Button>
        </div>
      </header>
      <div className={styles.container}>
        <section className={styles.section}>
          <h3 className={styles.section_heading}>What Do I Do?</h3>
          <div className={styles.section_content}>
            <div className={styles.fields}>
              <div className={styles.field_row}>
                <div className={styles.field_info}>
                  <h4 className={styles.field_heading}>Design</h4>
                  <p className={styles.field_text}>Probably I'm not the best UI/UX designer you'll ever see, but I Do design. And I make my works with rich user experiences while staying fashionable</p>
                </div>
                <div className={styles.field_decoration}>
                  {/* SVGs */}
                </div>
              </div>
              <div className={styles.field_row}>
                <div className={styles.field_decoration}>
                  {/* SVGs */}
                </div>
                <div className={styles.field_info}>
                  <h4 className={styles.field_heading}>Web dev</h4>
                  <p className={styles.field_text}>I build javascript applications with right tools and libraries, and can deliver fast, resilent solutions optimized for scale - performance and scalability are my priorities</p>
                </div>
              </div>
              <div className={styles.field_row}>
                <div className={styles.field_info}>
                  <h4 className={styles.field_heading}>Mobile dev</h4>
                  <p className={styles.field_text}>Haven't created any commercial mobile app yet, but I've built some for my own purposes such as automation of my life routine</p>
                </div>
                <div className={styles.field_decoration}>
                  {/* SVGs */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          
        </section>
        
      </div>
    </>
  )
}
