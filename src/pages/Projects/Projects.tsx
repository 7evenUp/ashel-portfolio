import { Footer, SectionHeading } from '../../components'
import { Project } from '../../components'
import { projects } from '../../uidata/projects'
import styles from './Projects.module.scss'

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <SectionHeading heading='My projects' />

        <div className={styles.projects}>
          {projects.map((project, i) => <Project key={i} {...project} />)}
        </div>

        <div className={styles.computer_footer}>
          <Footer />
        </div>
      </div>
      
      <div className={styles.mobile_footer}>
        <Footer />
      </div>
    </>
  )
}

export default Projects
