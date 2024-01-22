"use client";
import React, { useState, useRef, FunctionComponent } from "react";

const StopWatch: FunctionComponent = () => {
  const [timer, setTimer] = useState<number>(0);
  const countRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current!);
  };

  const handleReset = () => {
    clearInterval(countRef.current!);
    setTimer(0);
  };

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div>
      <p className="font-timer text-[128px]">{`${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
