import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { Menu } from './components'
import { About, Projects } from './pages'

const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Route>   
      </Routes>
    </BrowserRouter>
  )
}

export default AppNavigator
