"use client";
import React, { FunctionComponent, useState } from "react";
import { useTimer } from "react-timer-hook";
import Input from "./Input";
import { Button } from "@mantine/core";

const Timer: FunctionComponent = () => {
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const currentTime = new Date();
  currentTime.setSeconds(currentTime.getSeconds() + 6000); // 10 minutes timer

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
    expiryTimestamp: currentTime,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  const newValue = (value: any) =>
    value < 10 && value >= 0 ? "0" + value : value;

  return (
    <div>
      <Input onTime={setTime} onType={setType} />
      <div>
        {time} {type}
      </div>
      <div className="font-timer text-[128px]">
        <span>{newValue(hours)}</span>:<span>{newValue(minutes)}</span>:
        <span>{newValue(seconds)}</span>
      </div>
      <div className="flex gap-[4px]">
        <Button variant="outline" onClick={start} className="!w-[33.333%]">
          Start
        </Button>
        <Button variant="outline" onClick={pause} className="!w-[33.333%]">
          Pause
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
          className="!w-[33.333%]"
        >
          Restart
        </Button>
      </div>
    </div>
  );
};

export default Timer;
