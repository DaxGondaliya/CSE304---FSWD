# 🧮 Kids Calculator - Full Stack Application

A colorful and interactive web-based calculator designed for kids, built with React frontend and Express.js backend.

## Features

- ✨ Kid-friendly colorful interface with emojis and animations
- 🔢 Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
- ✅ Input validation to handle invalid inputs (letters, empty fields)
- 🚫 Error handling for division by zero
- 📱 Responsive design that works on mobile and desktop
- 🎨 Beautiful gradient backgrounds and smooth animations

## Project Structure

```
task-12/
├── public/          # React static files
├── src/             # React frontend
│   ├── App.js       # Main calculator component
│   ├── App.css      # Kid-friendly styling
│   └── index.js     # React entry point
├── server.js        # Express.js backend server
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## How to Run

### Prerequisites
- Node.js installed on your system
- npm package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Application
You have two options:

#### Option A: Run both frontend and backend together (Recommended)
```bash
npm run dev
```
This will start both the Express server (port 5000) and React app (port 3000) simultaneously.

#### Option B: Run separately
In one terminal:
```bash
npm run server
```

In another terminal:
```bash
npm start
```

### Step 3: Open in Browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### POST /api/calculate
Performs mathematical calculations.

**Request Body:**
```json
{
  "num1": "5",
  "num2": "3",
  "operation": "add"
}
```

**Response:**
```json
{
  "result": 8,
  "error": null,
  "calculation": "5 add 3 = 8"
}
```

**Supported Operations:**
- `add` - Addition
- `subtract` - Subtraction  
- `multiply` - Multiplication
- `divide` - Division

### GET /api/health
Health check endpoint to verify server is running.

## Input Validation

The calculator handles various invalid inputs:
- ❌ Letters or special characters
- ❌ Empty fields
- ❌ Division by zero
- ❌ Non-numeric values

All errors are displayed with friendly messages for kids.

## Technical Features

- **Frontend**: React with Hooks (useState)
- **Backend**: Express.js with CORS enabled
- **HTTP Client**: Axios for API communication
- **Styling**: Custom CSS with gradients and animations
- **Error Handling**: Comprehensive validation on both frontend and backend
- **Responsive**: Mobile-friendly design

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Development Notes

- The calculator uses Comic Sans MS font for a kid-friendly appearance
- Bright colors and emoji make it engaging for children
- Animations provide visual feedback for user interactions
- Input validation prevents crashes from invalid data
- Server runs on port 5000, React on port 3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
