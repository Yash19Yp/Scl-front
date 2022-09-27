import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";

import "./App.css";
import Students from "./pages/studentDetails";

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<div></div>} />
            <Route exact path="/studentDetails" element={<Students />} />
            <Route exact path="/teacherDetails" element={<div></div>} />
            <Route exact path="/profile" element={<div></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
