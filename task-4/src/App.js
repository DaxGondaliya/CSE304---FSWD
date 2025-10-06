import React, { useState, useEffect } from 'react';
import './FeedbackDashboard.css';  // importing CSS

const FeedbackDashboard = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [feedbackCounts, setFeedbackCounts] = useState({
    Excellent: 0,
    Good: 0,
    Average: 0,
    Poor: 0,
  });
  const [myFeedbackCount, setMyFeedbackCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const categories = ['Excellent', 'Good', 'Average', 'Poor'];
    const crowdFeedback = setInterval(() => {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      setFeedbackCounts(prev => ({
        ...prev,
        [randomCategory]: prev[randomCategory] + 1,
      }));
    }, 2000);
    return () => clearInterval(crowdFeedback);
  }, []);

  const handleFeedback = (category) => {
    setFeedbackCounts(prev => ({
      ...prev,
      [category]: prev[category] + 1,
    }));
    setMyFeedbackCount(prev => prev + 1);
  };

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="dashboard">
      <h2>Product Feedback Dashboard</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        {firstName && surname && (
          <h3>Welcome, {firstName} {surname}!</h3>
        )}
      </div>

      <div className="datetime">
        <strong>Date:</strong> {formattedDate} <br />
        <strong>Time:</strong> {formattedTime}
      </div>

      <div className="feedback-section">
        <h4>Submit Your Feedback:</h4>
        {['Excellent', 'Good', 'Average', 'Poor'].map(category => (
          <button
            key={category}
            onClick={() => handleFeedback(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="feedback-totals">
        <h4>Current Feedback Totals:</h4>
        {Object.entries(feedbackCounts).map(([category, count]) => (
          <div key={category}>
            {category}: {count}
          </div>
        ))}
      </div>

      <div className="personal-counter">
        <h4>Your Feedback Count: {myFeedbackCount}</h4>
        <button onClick={() => setMyFeedbackCount(myFeedbackCount + 1)}>+1</button>
        <button onClick={() => setMyFeedbackCount(myFeedbackCount - 1)}>-1</button>
        <button onClick={() => setMyFeedbackCount(0)}>Reset</button>
        <button onClick={() => setMyFeedbackCount(myFeedbackCount + 5)}>+5</button>
      </div>
    </div>
  );
};

export default FeedbackDashboard;
