import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaListAlt, FaRocket } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1 - Hero */}
      <section className="h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-4 drop-shadow-lg">Welcome to TaskMate</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Your daily companion to keep track of tasks, stay productive, and achieve more!
        </p>
        <button
          onClick={() => navigate('/todolist')}
          className="mt-4 px-8 py-3 bg-blue-700 text-white text-lg rounded-full shadow-md hover:bg-blue-800 transition-all"
        >
          Go to Todo List
        </button>
      </section>

      {/* Section 2 - Benefits */}
      <section className="h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">Why TaskMate?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
          <div className="flex flex-col items-center">
            <FaListAlt className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Organized</h3>
            <p className="text-gray-600 mt-2">Plan your day with clarity and simplicity.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Reliable</h3>
            <p className="text-gray-600 mt-2">Never miss a task with our reminder system.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket className="text-purple-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Boost Productivity</h3>
            <p className="text-gray-600 mt-2">Accomplish more in less time, every day.</p>
          </div>
        </div>
      </section>

      {/* Section 3 - About / Features */}
      <section className="h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Built with ❤️ using React</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          TaskMate is a modern React app powered by React Router and styled with TailwindCSS.
          Whether you’re a student, developer, or manager, it's built to help **you** stay on top of your goals.
        </p>
        <button
          onClick={() => navigate('/todolist')}
          className="mt-8 px-8 py-3 bg-purple-700 text-white rounded-full text-lg hover:bg-purple-800 transition-all shadow-lg"
        >
          Start Using Now
        </button>
      </section>
    </div>
  );
};

export default Home;
