import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/") // call backend
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1>{message}</h1>
        <p>This is a proof of concept with React + Express 🚀</p>
      </div>
    </div>
  );
}

export default App;
