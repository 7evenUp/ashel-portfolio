import React, { useEffect, useState } from 'react'
import './App.scss'
import { Menu } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  return (
    <div className="App">
      {loading ? (
        <h1>= = = Loading = = =</h1>
      ) : (
        <>
          <h1 className='App_heading'>Ashel Portfolio</h1>
          <div className='App_navigation_wrapper'>
            <Menu />
          </div>
          
          <Outlet />
        </>
      )}
    </div>
  )
}

export default App;
