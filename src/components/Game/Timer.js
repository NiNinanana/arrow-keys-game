/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

const Timer = ({
  time,
  setTime,
  isError,
  setIsError,
  smallTime,
  setSmallTime,
}) => {
  const startTimer = () => {
    setTime((prev) => prev + 1);
  };

  useEffect(() => {
    setInterval(() => {
      startTimer();
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSmallTime((prev) => {
        if (prev === 99) return 0;
        return prev + 1;
      });
    }, 10);
  }, []);

  useEffect(() => {
    if (isError) {
      setTimeout(() => setIsError(false), 500);
    }
  }, [isError]);

  return (
    <div className="flex justify-center">
      <div
        className={`text-3xl flex justify-center mt-20 border-2 ${
          isError ? "border-red-500 text-red-500" : "border-black text-black"
        } w-3/5 py-2 `}
      >
        {`00${Math.floor(time / 60)}`.slice(-2)}분 {`00${time % 60}`.slice(-2)}
        초 {`00${smallTime}`.slice(-2)}
      </div>
    </div>
  );
};

export default Timer;
