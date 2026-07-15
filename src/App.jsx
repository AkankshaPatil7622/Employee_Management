import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import About from './pages/About';
import Dashboard from './pages/Dashboard';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
