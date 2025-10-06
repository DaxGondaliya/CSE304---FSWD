import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Charusat from "./pages/Charusat";
import Depstar from "./pages/Depstar";
import CSE from "./pages/CSE";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="app">
        <div className="menu-button" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Charusat />} />
            <Route path="/charusat" element={<Charusat />} />
            <Route path="/depstar" element={<Depstar />} />
            <Route path="/cse" element={<CSE />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
