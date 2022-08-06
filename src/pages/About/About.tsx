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

        <section className={styles.section}>
          <h3 className={styles.section_heading}>My Skills</h3>
          <div className={styles.section_content}>
            <div className={styles.skills}>
              <div className={styles.skill}>
                <figure className={styles.skill_image}>
                  ...here will be image
                </figure>
                <h4 className={styles.skill_heading}>Frontend</h4>
                <ul className={styles.skill_list}>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>React</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Redux toolkit</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Tailwind CSS</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Next.js</span>
                  </li>
                </ul>
              </div>
              <div className={styles.skill}>
                <figure className={styles.skill_image}>
                  ...here will be image
                </figure>
                <h4 className={styles.skill_heading}>Backend</h4>
                <ul className={styles.skill_list}>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Node</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Express</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Nest</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>MongoDB</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Firebase</span>
                  </li>
                </ul>
              </div>
              <div className={styles.skill}>
                <figure className={styles.skill_image}>
                  ...here will be image
                </figure>
                <h4 className={styles.skill_heading}>Mobile</h4>
                <ul className={styles.skill_list}>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>React-Native</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Flutter</span>
                  </li>
                  <li className={styles.skill_list_item}>
                    <span>circle</span>
                    <span>Kotlin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <figure className={styles.footer_decoration_left}>
            ...svg left top
          </figure>
          <figure className={styles.footer_decoration_right}>
            ...svg right bottom
          </figure>
          <div className={styles.footer_top}>
            <div className={styles.footer_top_left}>
              <div>
                <h4>Navigation</h4>
                <div>
                  <Link to={'/about'}>About active</Link>
                  <Link to={'/about'}>Projects</Link>
                </div>
              </div>
              <div>
                <h4>Contact me</h4>
                <div>
                  <a href='mailto:sheludeshev.artyom@mail.ru'>@mail.me</a>
                  <a href='t.me/x7evenUpx'>t.me/x7evenUpx</a>
                </div>
              </div>
            </div>
            <div className={styles.footer_top_right}>
              <div>
                <h4>I also write, sometimes</h4>
                <p>About frontend dev, crypto trading, design and life</p>
                <Button>
                  <a href='https://ashel.vercel.app'>Read my blog</a>
                </Button>
              </div>
              <div>
                <h4>Make sure to see my works</h4>
                <p>Open source, UI kits, UI libraries, websites and more</p>
                <Button>
                  <Link to={'/projects'}>See my works</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <span className={styles.copyright}>© Artyom Sheludeshev 2022</span>
            <ul className={styles.socials}>
              <li>VK</li>
              <li>GH</li>
              <li>IN</li>
              <li>TW</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
