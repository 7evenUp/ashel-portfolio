import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import AppNavigator from './AppNavigator'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <AppNavigator />
  </React.StrictMode>
)
