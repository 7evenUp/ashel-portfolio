import { motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Socials from '../Socials/Socials'
import TextureSvg from '../TextureSvg/TextureSvg'
import styles from './Footer.module.scss'

const Footer = () => {
  const location = useLocation()
  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={styles.footer}
    >
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
        <span className={styles.separator}/>
        <div className={styles.footer_top_right}>
          <div>
            <h4>I also write, sometimes</h4>
            <p>About frontend dev, crypto trading, design and life</p>
            <a href='https://www.ashel.site/' target={'_blank'} rel="noreferrer">Read my blog</a>
          </div>
          { location.pathname !== '/projects' && (
            <div>
              <h4>Make sure to see my works</h4>
              <p>Open source, UI kits, UI libraries, websites and more</p>
              <Link to={'/projects'}>See my works</Link>
            </div>
          )}
        </div>
      </div>
      <span className={styles.separator} />
      <div className={styles.footer_bottom}>
        <span className={styles.copyright}>© Artyom Sheludeshev 2022</span>
        <Socials />
      </div>
    </motion.footer>
  )
}

export default Footer
