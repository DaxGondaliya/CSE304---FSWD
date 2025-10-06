import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-button" onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/charusat">Charusat</Link></li>
          <li><Link to="/depstar">Depstar</Link></li>
          <li><Link to="/cse">CSE</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
