import React, { useState } from 'react';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      background: '#fefefe',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>📝 Todo List</h2>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: '10px',
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              background: task.completed ? '#d1ffd1' : '#f9f9f9',
              marginBottom: '10px',
              padding: '12px 16px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: '0.3s ease'
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#555' : '#222',
                fontSize: '16px'
              }}
            >
              {task.text}
            </span>
            <div>
              <button
                onClick={() => toggleComplete(task.id)}
                style={{
                  marginRight: '8px',
                  background: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  cursor: 'pointer'
                }}
              >
                ✔️
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  background: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  cursor: 'pointer'
                }}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
