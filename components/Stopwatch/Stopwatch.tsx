"use client";
import React, { useState, useRef, FunctionComponent, useCallback } from "react";
import { Button } from "@mantine/core";

const Stopwatch: FunctionComponent = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const countRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsRunning(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 10);
    }, 10);
  };

  const handlePause = useCallback(() => {
    if (countRef.current) {
      clearInterval(countRef.current!);
    }
    setIsRunning(false);
  }, []);

  const handleReset = () => {
    clearInterval(countRef.current!);
    setTimer(0);
    setLaps([]);
    setIsRunning(false);
  };

  const handleLap = () => {
    setLaps([...laps, timer]);
  };

  const hours = (value: any) => Math.floor(value / 3600000);
  const minutes = (value: any) => Math.floor((value % 3600000) / 60000);
  const seconds = (value: any) => Math.floor((value % 60000) / 1000);
  const milliseconds = (value: any) => value % 1000;

  return (
    <div className="flex flex-col">
      <div className="flex items-end">
        <p className="font-timer text-[128px] leading-[normal]">{`${hours(timer)
          .toString()
          .padStart(2, "0")}:${minutes(timer)
          .toString()
          .padStart(2, "0")}:${seconds(timer).toString().padStart(2, "0")}`}</p>
        <span className="font-timer text-[40px]">
          .{milliseconds(timer).toString().padStart(3, "0").slice(0, -1)}
        </span>
      </div>
      <div className="flex gap-[4px]">
        {!isRunning ? (
          <Button
            variant="outline"
            onClick={handleStart}
            className="!w-[33.333%]"
          >
            Start
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={handlePause}
            className="!w-[33.333%]"
          >
            Pause
          </Button>
        )}
        <Button
          variant="outline"
          onClick={handleReset}
          className="!w-[33.333%]"
        >
          Reset
        </Button>
        <Button variant="outline" onClick={handleLap} className="!w-[33.333%]">
          Lap
        </Button>
      </div>
      <div>
        {laps.map((lap, index) => (
          <p key={index}>
            Lap {index + 1}:{" "}
            {`${hours(lap).toString().padStart(2, "0")}:${minutes(lap)
              .toString()
              .padStart(2, "0")}:${seconds(lap)
              .toString()
              .padStart(2, "0")}:${milliseconds(lap)
              .toString()
              .padStart(3, "0")
              .slice(0, -1)}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Stopwatch;
