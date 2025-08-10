import { useState, useEffect } from 'react';

export function useClock() {
  const [timeParts, setTimeParts] = useState({
    hour: '00',
    minutes: '00',
    seconds: '00',
    ampm: '',
    date: new Date(),
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h24 = now.getHours();
      const ampm = h24 >= 12 ? 'PM' : 'AM';
      const hour = String(h24 % 12 || 12).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setTimeParts({ hour, minutes, seconds, ampm, date: now });
    };

    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return timeParts;
}
