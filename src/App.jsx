//main ui which is to be handled by suraj !
// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/todolist'; // adjust path as needed
import './index.css'
import Home from './components/Home';
import Extra from './pages/Extra';
import Ho from './pages/Ho';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path='/extra' element={<Extra/>}/>
        <Route path="/ho" element={<Ho/>}/>
      </Routes>
    </Router>
  );
}

export default App;
