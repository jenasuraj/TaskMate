//to be handled by suraj

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-600'>Welcome</h1>
      <button onClick={() => navigate('/todolist')}>Go to Todo List</button>
    </div>
  )
}

export default Home


