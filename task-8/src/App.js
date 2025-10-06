import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("repCount");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("repCount", count);
  }, [count]);

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Gym Rep Counter</h1>
        <div className="count">{count}</div>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)} className="decrease">-1</button>
          <button onClick={() => setCount(count + 1)} className="increase">+1</button>
        </div>
        <button onClick={() => setCount(0)} className="reset">Reset</button>
      </div>
    </div>
  );
}
