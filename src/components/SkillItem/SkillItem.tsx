import { Skill } from "@/uidata"
import styles from "./SkillItem.module.scss"

const SkillItem = ({ name, level }: Skill) => (
  <li className={styles.container}>
    <span
      className={`${styles.circle} ${
        level === "beginner" ? styles.circle_beginner : styles.circle_skilled
      }`}
    />
    <span className={styles.label}>{name}</span>
  </li>
)

export default SkillItem
