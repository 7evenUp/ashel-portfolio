import styles from './Socials.module.scss'

const socialsData = [
  {
    link: 'https://vk.com/aptem_oxa',
    src: 'vk_icon.svg'
  },
  {
    link: 'https://github.com/7evenUp',
    src: 'github_icon.svg'
  },
  {
    link: 'https://www.instagram.com/7_even_up/',
    src: 'instagram_icon.svg'
  },
  {
    link: 'https://dribbble.com/7_even_Up',
    src: 'dribbble_icon.svg'
  },
]

type SocialsProps = {
  small?: boolean
}

export default function Socials({small}: SocialsProps) {
  return (
    <ul className={small ? styles.list_small : styles.list}>
      {socialsData.map((social, index) => (
        <li key={index}><a href={social.link} target={"_blank"} rel="noreferrer">
          <span style={{backgroundImage: `url(${social.src})`}}/>
        </a></li>
      ))}
    </ul>
  )
}
