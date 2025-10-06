import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1 className="title">✨ Welcome to CHARUSAT Digital Clock ✨</h1>
      <h2 className="date">📅 Today's Date: {currentDate.toLocaleDateString()}</h2>
      <h2 className="time">⏰ Current Time: {currentDate.toLocaleTimeString()}</h2>
      <p className="footer">Crafted with ❤️ by CHARUSATians</p>
    </div>
  );
}

export default App;
