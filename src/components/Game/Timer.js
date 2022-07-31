/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

const Timer = ({ seconds, setSeconds, minutes, setMinutes }) => {
  const startTimer = () => {
    setTimeout(() => {
      if (seconds === 59) {
        setMinutes((prev) => prev + 1);
        setSeconds(0);
        return;
      }
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, [seconds]);

  return (
    <div className="flex justify-center">
      <div className="text-3xl flex justify-center mt-20 border-2 border-black w-2/5 py-2">
        {`00${minutes}`.slice(-2)}:{`00${seconds}`.slice(-2)}
      </div>
    </div>
  );
};

export default Timer;
