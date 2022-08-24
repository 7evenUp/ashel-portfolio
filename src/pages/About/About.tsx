import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, SectionHeading, SkillItem, TextureSvg } from '../../components'
import { uidata } from '../../uidata'
import styles from './About.module.scss'

export default function About() {
  return (
    <>
      <header className={styles.header}>
        <figure className={styles.avatar}>
          <span className={styles.avatar_shapes} />
          <span className={styles.avatar_image}/>
        </figure>
        <div className={styles.hero}>
            <h2 className={styles.hero_heading}>Frontend Developer</h2>
            <p className={styles.hero_desc}>I like to build creative products with great user experiences</p>
            <ul className={styles.hero_highlights}>
              <li>Over three years of building web tools and UI designs</li>
              <li>Highly skilled at creating products from scratch</li>
            </ul>
            <Link to='/projects' className={styles.hero_btn}>See my works</Link>
        </div>
      </header>
      <div className={styles.container}>
        <section className={styles.section}>
          <SectionHeading heading='What Do I Do?'/>
          <div className={styles.section_content}>
            <div className={styles.fields}>
              <div className={styles.field}>
                <div className={styles.field_info}>
                  <div className={styles.field_info_designed_header}>
                    <h4 className={styles.field_heading}>Design</h4>
                    <div className={styles.field_heading_svg}>
                      <TextureSvg />
                    </div>
                  </div>
                  <p className={styles.field_text}>Probably I'm not the best UI/UX designer you'll ever see, but I Do design. And I make my works with rich user experiences while staying fashionable</p>
                </div>
                <div className={`${styles.field_decoration} ${styles.design}`} />
              </div>
              <div className={styles.field}>
                <div className={`${styles.field_decoration} ${styles.web}`} />
                <div className={styles.field_info}>
                  <h4 className={styles.field_heading}>Web dev</h4>
                  <p className={styles.field_text}>I build javascript applications with right tools and libraries, and can deliver fast, resilent solutions optimized for scale - performance and scalability are my priorities</p>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.field_info}>
                  <h4 className={styles.field_heading}>Mobile dev</h4>
                  <p className={styles.field_text}>Haven't created any commercial mobile app yet, but I've built some for my own purposes such as automation of my life routine</p>
                </div>
                <div className={`${styles.field_decoration} ${styles.mobile}`} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <SectionHeading heading='My Skills'/>
          <div className={styles.section_content}>
            <div className={styles.skills}>
              {Object.entries(uidata).map((obj, i) => (
                <div key={i} className={styles.skill}>
                  <img src={`${obj[0]}_illustration.png`} alt={obj[0]} className={styles.skill_image} />
                  <h4 className={styles.skill_heading}>{obj[0]}</h4>
                  <ul className={styles.skill_list}>
                    {obj[1].map((el, i) => <SkillItem key={i} name={el.name} level={el.level} />)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
}
