import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Menu } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className='App_heading'>Ashel Portfolio</h1>
      <div className='App_navigation_wrapper'>
        <Menu />
      </div>
      
      <Outlet />
    </div>
  )
}

export default App;
