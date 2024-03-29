import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import "./App.scss"

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className="App">
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="App_preloader"
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'backInOut' }}
          >
            <h1>... Loading Ashel's data ...</h1>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="main">
            <h1 className="App_heading">Ashel Portfolio</h1>

            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
