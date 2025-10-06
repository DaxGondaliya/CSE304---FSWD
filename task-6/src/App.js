import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };
    }
  }, []);

  const handleAddTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    if (editIndex === index) {
      setEditIndex(null);
      setEditText('');
    }
  };

  const handleVoiceInput = () => {
    if (recognitionRef.current) recognitionRef.current.start();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleSaveEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = editText;
    setTasks(newTasks);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="title">Get Things Done !</h1>

        <div className="input-area">
          <input
            className="task-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What is the task today?"
          />
          <button className="add-button" onClick={handleAddTask}>Add Task</button>
          <button className="voice-button" onClick={handleVoiceInput}>🎙️</button>
        </div>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-card" key={index}>
              {editIndex === index ? (
                <>
                  <input
                    className="edit-input"
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button className="save-btn" onClick={() => handleSaveEdit(index)}>✅</button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <div className="icons">
                    <button className="edit-btn" onClick={() => handleEdit(index)}>✏️</button>
                    <button className="delete-btn" onClick={() => handleDeleteTask(index)}>🗑️</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
