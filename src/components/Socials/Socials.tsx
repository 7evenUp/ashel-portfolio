import styles from "./Socials.module.scss"

const socialsData = [
  {
    link: "https://vk.com/aptem_oxa",
    src: "icons/vk_icon.svg",
  },
  {
    link: "https://github.com/7evenUp",
    src: "icons/github_icon.svg",
  },
  {
    link: "https://www.instagram.com/7_even_up/",
    src: "icons/instagram_icon.svg",
  },
  {
    link: "https://dribbble.com/7_even_Up",
    src: "icons/dribbble_icon.svg",
  },
]

type SocialsProps = {
  small?: boolean
}

export default function Socials({ small }: SocialsProps) {
  return (
    <ul className={small ? styles.list_small : styles.list}>
      {socialsData.map((social, i) => (
        <li key={i}>
          <a href={social.link} target={"_blank"} rel="noreferrer">
            <span style={{ backgroundImage: `url(${social.src})` }} />
          </a>
        </li>
      ))}
    </ul>
  )
}
