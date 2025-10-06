import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [calculation, setCalculation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculation = async (operation) => {
    // Clear previous results
    setError('');
    setResult(null);
    setCalculation('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/calculate', {
        num1,
        num2,
        operation
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setResult(response.data.result);
        setCalculation(response.data.calculation);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Unable to connect to calculator server. Please make sure the server is running!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const clearCalculator = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    setError('');
    setCalculation('');
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <h1 className="calculator-title">Calculator</h1>
        <p className="calculator-subtitle">Perform basic mathematical operations</p>
        
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="num1">First Number:</label>
            <input
              id="num1"
              type="text"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter first number"
              className="number-input"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="num2">Second Number:</label>
            <input
              id="num2"
              type="text"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter second number"
              className="number-input"
            />
          </div>
        </div>

        <div className="operation-buttons">
          <button 
            className="operation-btn add-btn"
            onClick={() => handleCalculation('add')}
            disabled={isLoading}
          >
            + Add
          </button>
          <button 
            className="operation-btn subtract-btn"
            onClick={() => handleCalculation('subtract')}
            disabled={isLoading}
          >
            - Subtract
          </button>
          <button 
            className="operation-btn multiply-btn"
            onClick={() => handleCalculation('multiply')}
            disabled={isLoading}
          >
            × Multiply
          </button>
          <button 
            className="operation-btn divide-btn"
            onClick={() => handleCalculation('divide')}
            disabled={isLoading}
          >
            ÷ Divide
          </button>
        </div>

        <button 
          className="clear-btn"
          onClick={clearCalculator}
          disabled={isLoading}
        >
          Clear All
        </button>

        {isLoading && (
          <div className="loading">
            <p>Calculating...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {result !== null && !error && (
          <div className="result-section">
            <h2>Result:</h2>
            <div className="calculation-display">
              <p className="calculation-text">{calculation}</p>
            </div>
            <div className="result-display">
              <p className="result-number">{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
