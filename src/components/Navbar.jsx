import React from 'react'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div id='navbar'>
      <h2>Employee Management System</h2>
      <ul>
        <li> <i className="fa-solid fa-bell"></i> Notification</li>
        <li><i className="fa-solid fa-circle-user"></i> User name</li>
      </ul>
    </div>
  )
}

export default Navbar