import { useState } from 'react'
import {Routes, Route, createBrowserRouter} from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Dashboardlayout from './layouts/Dashboardlayout';
import Employees from './pages/Employees';
import Attendence from './pages/Attendence';
import Leaverequests from './pages/Leaverequests';
import HRmanagement from './pages/HRmanagement';
import Departments from './pages/Departments';

function App() {
 
 
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Login />}/> */}
        <Route path='/' element={<Dashboardlayout />}>
        <Route index path='/dashboard' element={<Dashboard />}/>
        <Route path='/attendence' element={<Attendence />}/>
        <Route path='/employees' element={<Employees />}/>
        <Route path='/leave_requests' element={<Leaverequests />}/>
        <Route path='/HR_management' element={<HRmanagement />}/>
        <Route path='/departments' element={<Departments />}/>

        </Route>

        
      </Routes>
    </>
  )
}

export default App
