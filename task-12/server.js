const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to validate numbers
const isValidNumber = (num) => {
  return !isNaN(num) && isFinite(num) && num !== null && num !== '';
};

// Calculator endpoints
app.post('/api/calculate', (req, res) => {
  try {
    const { num1, num2, operation } = req.body;
    
    // Convert to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    // Validate inputs
    if (!isValidNumber(number1) || !isValidNumber(number2)) {
      return res.status(400).json({
        error: 'Please enter valid numbers only!',
        result: null
      });
    }
    
    let result;
    
    switch (operation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          return res.status(400).json({
            error: 'Cannot divide by zero!',
            result: null
          });
        }
        result = number1 / number2;
        break;
      default:
        return res.status(400).json({
          error: 'Invalid operation!',
          result: null
        });
    }
    
    // Round result to 2 decimal places for cleaner display
    result = Math.round(result * 100) / 100;
    
    res.json({
      result: result,
      error: null,
      calculation: `${number1} ${operation} ${number2} = ${result}`
    });
    
  } catch (error) {
    res.status(500).json({
      error: 'Something went wrong! Please try again.',
      result: null
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Calculator server is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Calculator server is running on http://localhost:${PORT}`);
});