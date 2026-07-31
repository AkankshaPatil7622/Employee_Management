import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboardlayout.css";
import { Outlet } from "react-router-dom";

function Dashboardlayout() {
  return (
    <div>
      <Navbar />
        <div id="dashboard-container">
          <Sidebar />
        

        <div className="main-content">{/* different pages*/}
          <Outlet />
        </div>
        </div>
      </div>
  );
}

export default Dashboardlayout;
