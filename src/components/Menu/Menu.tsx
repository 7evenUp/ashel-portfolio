import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Socials from '../Socials/Socials'
import styles from './Menu.module.scss'

export default function Menu() {
  const [menuOpened, setMenuOpened] = useState(false)

  const changeMenuState = () => setMenuOpened(!menuOpened)

  if (!menuOpened) return (
    <button
      style={{
        marginTop: 50,
        marginRight: 32
      }}
      className={styles.btn}
      type='button'
      onClick={changeMenuState}
    >
      {'< />'}
    </button>
  )
  else return (
    <div className={styles.menu}>
      <button
        className={styles.btn}
        type='button'
        onClick={changeMenuState}
      >
        {'<CloseButton />'}
      </button>
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

    </div>
  )
}
