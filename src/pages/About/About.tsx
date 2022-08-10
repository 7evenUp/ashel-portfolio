import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SkillItem, Socials, TextureSvg } from '../../components'
import { uidata } from '../../uidata'
import styles from './About.module.scss'

export default function About() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image_wrapper}>
          <figure className={styles.avatar}>
            <span className={styles.avatar_shapes} />
            <span className={styles.avatar_image}/>
          </figure>
        </div>
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
          <h3 className={styles.section_heading}>What Do I Do?</h3>
          <div className={styles.section_content}>
            <div className={styles.fields}>
              <div className={styles.field}>
                <div className={styles.field_info}>
                  <h4 className={styles.field_heading}>Design</h4>
                  <p className={styles.field_text}>Probably I'm not the best UI/UX designer you'll ever see, but I Do design. And I make my works with rich user experiences while staying fashionable</p>
                </div>
                <div className={styles.field_decoration}>
                  {/* SVGs */}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.field_decoration}>
                  {/* SVGs */}
                </div>
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
              {Object.entries(uidata).map(obj => (
                <div className={styles.skill}>
                  <img src={`${obj[0]}_illustration.png`} alt={obj[0]} className={styles.skill_image} />
                  <h4 className={styles.skill_heading}>{obj[0]}</h4>
                  <ul className={styles.skill_list}>
                    {obj[1].map(el => (
                      <li className={styles.skill_list_item}>
                        <SkillItem name={el.name} level={el.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footer_decoration_left}>
            <TextureSvg />
          </div>
          <div className={styles.footer_decoration_right}>
            <TextureSvg />
          </div>
          <div className={styles.footer_top}>
            <div className={styles.footer_top_left}>
              <div className={styles.contacts}>
                <h4 className={styles.contacts_heading}>Navigation</h4>
                <div className={styles.contacts_links}>
                  <NavLink className={styles.navlink} to={'/'}>{({isActive}) => (
                    isActive ? '<About active />' : '<About />'
                  )}</NavLink>
                  <NavLink className={styles.navlink} to={'/projects'}>{({isActive}) => (
                    isActive ? '<Projects active />' : '<Projects />'
                  )}</NavLink>
                </div>
              </div>
              <span className={styles.separator}/>
              <div className={styles.contacts}>
                <h4 className={styles.contacts_heading}>Contact me</h4>
                <div className={styles.contacts_links}>
                  <a className={styles.link} href='mailto:sheludeshev.artyom@mail.ru'>@mail.me</a>
                  <a className={styles.link} href='https://t.me/x7evenUpx' target={'_blank'} rel="noreferrer">t.me/x7evenUpx</a>
                </div>
              </div>
            </div>
            <div className={styles.footer_top_right}>
              <div>
                <h4>I also write, sometimes</h4>
                <p>About frontend dev, crypto trading, design and life</p>
                <a href='https://ashel.vercel.app' target={'_blank'} rel="noreferrer">Read my blog</a>
              </div>
              <div>
                <h4>Make sure to see my works</h4>
                <p>Open source, UI kits, UI libraries, websites and more</p>
                <Link to={'/projects'}>See my works</Link>
              </div>
            </div>
          </div>
          <span className={styles.separator} />
          <div className={styles.footer_bottom}>
            <span className={styles.copyright}>© Artyom Sheludeshev 2022</span>
            <Socials />
          </div>
        </footer>
      </div>
    </>
  )
}
