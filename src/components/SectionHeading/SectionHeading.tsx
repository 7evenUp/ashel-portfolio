import { motion } from 'framer-motion'
import styles from './SectionHeading.module.scss'

const SectionHeading = ({heading}: {heading: string}) => (
  <motion.h3
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className={styles.section_heading}
  >
    {heading}
  </motion.h3>
)

export default SectionHeading