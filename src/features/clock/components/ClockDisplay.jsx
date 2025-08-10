import React from 'react';
import { useClock } from '../hooks/UseClock';

const months = ['jan','feb','mar','apr','may','jun','jul','August','sep','oct','nov','dec'];

export const ClockDisplay = () => {
  const { hour, minutes, seconds, ampm, date } = useClock();

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4 items-center">
        <p className="text-5xl lg:text-9xl">{hour}</p>:
        <p className="text-5xl lg:text-9xl">{minutes}</p>:
        <p className="text-5xl lg:text-9xl">{seconds}</p>
        <p className="text-4xl">{ampm}</p>
      </div>
      <p className="text-lg font-bold">
        {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
      </p>
    </div>
  );
};
