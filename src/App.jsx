//main ui which is to be handled by suraj !
// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TodoList from './pages/todolist'; // adjust path as needed

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate('/todolist')}>Go to Todo List</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
