import { useState, useEffect } from 'react';

// Define the return type of the custom hook
interface StopwatchHook {
  stopwatch: number;
  startStopwatch: () => void;
  stopStopwatch: () => void;
  resetStopwatch: () => void;
  formatStopwatch: () => string;
}

const useStopwatch = (): StopwatchHook => {
  const [stopwatch, setStopwatch] = useState<number>(0); // Track the elapsed time in milliseconds
  const [isActive, setIsActive] = useState<boolean>(false); // Track if the stopwatch is running

  // Start the stopwatch
  const startStopwatch = (): void => {
    setStopwatch(0);
    setIsActive(true);
  };

  // Stop the stopwatch
  const stopStopwatch = (): void => {
    setIsActive(false);
    console.log(`stopwatch: ${formatStopwatch()}`);
  };

  // Reset the stopwatch
  const resetStopwatch = (): void => {
    setStopwatch(0);
    setIsActive(false);
  };

  // Effect to update the stopwatch when active
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setStopwatch((prevTime) => prevTime + 10); // Update every 10ms
      }, 10);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  // Format the time (seconds and milliseconds)
  const formatStopwatch = (): string => {
    const seconds = Math.floor(stopwatch / 1000);
    const milliseconds = stopwatch % 1000;
    return `${seconds}.${milliseconds} s`;
  };

  return {
    stopwatch,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    formatStopwatch,
  };
};

export default useStopwatch;
