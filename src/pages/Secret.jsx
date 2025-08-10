import React from 'react';
import { ClockDisplay } from '../features/clock/components/ClockDisplay';

const Secret = () => {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-600 min-h-screen w-full text-white flex justify-center items-center">
      <ClockDisplay />
    </section>
  );
};

export default Secret;
