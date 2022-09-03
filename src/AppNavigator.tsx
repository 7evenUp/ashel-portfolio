import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { About, Projects } from './pages'

const AppNavigator = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Route>   
      </Routes>
    </HashRouter>
  )
}

export default AppNavigator
