import React, { useState, useEffect } from 'react';
import './App.css';

// Login Form Component
const LoginForm = ({ authForm, handleAuthChange, handleLogin, setCurrentView }) => (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Login to Student Management</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={authForm.email}
            onChange={handleAuthChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={authForm.password}
            onChange={handleAuthChange}
            required
          />
        </div>
        <button type="submit" className="auth-btn">Login</button>
      </form>
      <p className="auth-switch">
        Don't have an account? 
        <button 
          type="button" 
          className="link-btn"
          onClick={() => setCurrentView('register')}
        >
          Register here
        </button>
      </p>
    </div>
  </div>
);

// Register Form Component
const RegisterForm = ({ authForm, handleAuthChange, handleRegister, setCurrentView }) => (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Register for Student Management</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={authForm.fullName}
            onChange={handleAuthChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={authForm.username}
            onChange={handleAuthChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={authForm.email}
            onChange={handleAuthChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={authForm.password}
            onChange={handleAuthChange}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="auth-btn">Register</button>
      </form>
      <p className="auth-switch">
        Already have an account? 
        <button 
          type="button" 
          className="link-btn"
          onClick={() => setCurrentView('login')}
        >
          Login here
        </button>
      </p>
    </div>
  </div>
);

// Dashboard Component (Simple Welcome Page)
const Dashboard = ({ user, handleLogout }) => (
  <div className="dashboard">
    <header className="dashboard-header">
      <h1>Welcome to Our Platform</h1>
      <div className="user-info">
        <span>Hello, {user?.fullName || user?.username}!</span>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </header>

    <div className="container">
      <div className="welcome-section">
        <h2>Authentication Successful!</h2>
        <div className="user-details">
          <h3>Your Profile Information:</h3>
          <p><strong>Full Name:</strong> {user?.fullName}</p>
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Account Created:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="dashboard-features">
          <h3>You have successfully:</h3>
          <ul>
            <li>✅ Registered your account securely</li>
            <li>✅ Logged in with JWT authentication</li>
            <li>✅ Accessed your protected dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'dashboard'
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  // Auth form states
  const [authForm, setAuthForm] = useState({
    username: '',
    email: '',
    password: '',
    fullName: ''
  });

  // Check if user is already logged in
  useEffect(() => {
    if (token) {
      fetchUserProfile();
      setCurrentView('dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        localStorage.removeItem('token');
        setToken(null);
        setCurrentView('login');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
      setToken(null);
      setCurrentView('login');
    }
  };

  // Handle auth form changes
  const handleAuthChange = (e) => {
    setAuthForm({
      ...authForm,
      [e.target.name]: e.target.value
    });
  };

  // User Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authForm),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        setCurrentView('dashboard');
        setAuthForm({ username: '', email: '', password: '', fullName: '' });
        alert('Registration successful!');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };

  // User Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: authForm.email,
          password: authForm.password
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        setCurrentView('dashboard');
        setAuthForm({ username: '', email: '', password: '', fullName: '' });
        alert('Login successful!');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  // User Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setCurrentView('login');
    alert('Logged out successfully!');
  };

  // Main render
  return (
    <div className="App">
      {currentView === 'login' && (
        <LoginForm
          authForm={authForm}
          handleAuthChange={handleAuthChange}
          handleLogin={handleLogin}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'register' && (
        <RegisterForm
          authForm={authForm}
          handleAuthChange={handleAuthChange}
          handleRegister={handleRegister}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'dashboard' && (
        <Dashboard
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;