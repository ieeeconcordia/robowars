import React, { useState, useEffect } from "react";

function CountdownTimer({ eventDate }: { eventDate: string }) {
  // State to store the remaining time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the remaining time
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const endDate = new Date(eventDate).getTime();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // Update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center w-full gap-4">
      <div className="flex flex-col justify-center items-center mobile-p gap-2">
        <span className="w-16 h-16 mobile-h3 text-white bg-primary flex items-center justify-center rounded-md">
          {timeRemaining.days}
        </span>{" "}
        days
      </div>
      <div className="flex flex-col justify-center items-center mobile-p gap-2">
        <span className="w-16 h-16 mobile-h3 text-white bg-primary flex items-center justify-center rounded-md">
          {timeRemaining.hours}
        </span>{" "}
        hours
      </div>
      <div className="flex flex-col justify-center items-center mobile-p gap-2">
        <span className="w-16 h-16 mobile-h3 text-white bg-primary flex items-center justify-center rounded-md">
          {timeRemaining.minutes}
        </span>{" "}
        minutes
      </div>
      <div className="flex flex-col justify-center items-center mobile-p gap-2">
        <span className="w-16 h-16 mobile-h3 text-white bg-primary flex items-center justify-center rounded-md">
          {timeRemaining.seconds}
        </span>{" "}
        seconds
      </div>
    </div>
  );
}

export default CountdownTimer;
