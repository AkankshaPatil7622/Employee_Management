import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <Link to={"/dashboard"}>
            <i class="fa-solid fa-rectangle-list"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/attendence">
            <i className="fa-solid fa-calendar-days"></i> Attendance
          </Link>
        </li>
        <li>
          <Link to={"/employees"}>
            <i class="fa-solid fa-user-group"></i> Employees{" "}
          </Link>
        </li>
        <li>
          <Link to={"/leave_requests"}>
            <i class="fa-solid fa-person-circle-minus"></i> Leave Requests
          </Link>
        </li>
        <li>
            <Link to={"/HR_management"}>
              <i class="fa-solid fa-user-tie"></i> HR Management{" "}
            </Link>
          </li>
          <li>
            <Link to={"/departments"}>
              <i class="fa-solid fa-person-booth"></i> Departments{" "}
            </Link>
          </li>
          <li>
          <Link to={"/logout"}>
            <i class="fa-solid fa-right-from-bracket"></i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
