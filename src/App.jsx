//main ui which is to be handled by suraj !
// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './components/Home';
import Secret from './pages/Secret';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </Router>
  );
}

export default App;
