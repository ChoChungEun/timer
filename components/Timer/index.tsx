"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  const newValue = (value: any) =>
    value < 10 && value >= 0 ? "0" + value : value;

  return (
    <div>
      <div className="font-timer text-[128px]">
        <span>{newValue(minutes)}</span>:<span>{newValue(seconds)}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Timer;
