import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else if (value === "DEL") {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    ["/", "*", "+", "-", "DEL"],
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0", ".", "="],
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">({result || 0})</div>
        <div className="expression">{expression || "0"}</div>
      </div>
      {buttons.map((row, rowIndex) => (
        <div
          className={`row ${rowIndex === 0 ? "top-row" : ""}`}
          key={rowIndex}
        >
          {row.map((btn) => (
            <button
              key={btn}
              className={`button ${["/", "*", "+", "-", "DEL", "="].includes(btn) ? "operator" : ""
                }`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
