import styles from "./Socials.module.scss"

const socialsData = [
  {
    link: "https://t.me/shel_heliks",
    src: "icons/telegram.svg",
  },
  {
    link: "https://github.com/7evenUp",
    src: "icons/github_icon.svg",
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
            <span
              style={{
                backgroundImage: `url(${social.src})`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
