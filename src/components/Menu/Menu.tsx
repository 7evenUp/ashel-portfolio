import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Socials from '../Socials/Socials'
import styles from './Menu.module.scss'

export default function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  
  return (
    <div className={styles.menu_wrapper}>
      <button
        className={styles.menu_btn}
        type='button'
        onClick={() => toggleOpen()}
      >
        {isOpen ? '<CloseButton />' : '< />'}
      </button>

      <motion.div
        animate={ isOpen ? 'open' : 'closed' }
        className={styles.menu}
      >
        <div className={styles.menu_navigation}>
          <NavLink className={styles.navlink} to={'/'}>{({isActive}) => (
            isActive ? '<About active />' : '<About />'
          )}</NavLink>
          <NavLink className={styles.navlink} to={'/projects'}>{({isActive}) => (
            isActive ? '<Projects active />' : '<Projects />'
          )}</NavLink>
        </div>

        <span className={styles.separator}/>

        <div className={styles.menu_contact}>
          <h4>GET IN TOUCH</h4>
          <div>
            <a className={styles.link} href='mailto:sheludeshev.artyom@mail.ru'>@mail.me</a>
            <a className={styles.link} href='https://t.me/x7evenUpx' target={'_blank'} rel="noreferrer">t.me/x7evenUpx</a>
          </div>
        </div>

        <span className={styles.separator}/>

        <div className={styles.menu_socials}>
          <h4>Socials</h4>
          <Socials small/>
        </div>
      </motion.div>
    </div>
  )
}
