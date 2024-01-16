"use client";
import React from "react";
import { useStopwatch } from "react-timer-hook";

const StopWatch = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  }: any = useStopwatch({ autoStart: true });

  const newValue = (value: any) =>
    value < 10 && value >= 0 ? "0" + value : value;

  return (
    <div>
      <div className="font-timer text-[128px]">
        <span>{newValue(minutes)}</span>:<span>{newValue(seconds)}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StopWatch;
