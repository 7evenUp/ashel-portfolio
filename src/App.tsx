import React, { useEffect, useState } from 'react'
import './App.scss'
import { Menu } from './components'
import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  return (
    <div className="App">
      <AnimatePresence>
        {loading ? (
            <motion.div
              className='App_preloader'
              key="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <h1>= = = Loading = = =</h1>
            </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className='App_heading'>Ashel Portfolio</h1>
            <div className='App_navigation_wrapper'>
              <Menu />
            </div>
            
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;
