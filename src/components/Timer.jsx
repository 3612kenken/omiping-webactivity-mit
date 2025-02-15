import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    // If the timer has reached 0, stop the interval
    if (timeLeft === 0) return;

    // Set up an interval to decrease time every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or timeLeft changes
    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Function that can be called to restart the timer with a new value
  const restartTimer = (newTime) => {
    setTimeLeft(newTime);
  };

  return (timeLeft );
};

export default Timer;