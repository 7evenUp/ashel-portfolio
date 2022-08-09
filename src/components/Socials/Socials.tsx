import React from 'react'
import styles from './Socials.module.scss'

const socialsData = [
  {
    name: 'vk',
    link: 'https://vk.com/aptem_oxa',
    src: 'vk_icon.svg'
  },

]

export default function Socials() {
  return (
    <ul className={styles.list}>
      <li>VK</li>
      <li>GH</li>
      <li>IN</li>
      <li>TW</li>
    </ul>
  )
}
