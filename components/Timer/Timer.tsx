"use client";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Input from "./Input";
import { Button } from "@mantine/core";

export const formatValue = (value: any) =>
  value < 10 && value >= 0 ? "0" + value : value;

export interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: FunctionComponent = () => {
  const [initTime, setInitTime] = useState<TimeState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [time, setTime] = useState<TimeState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = useCallback(() => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setIsRunning(false);
  }, []);

  const restartTimer = useCallback(() => {
    stopTimer();
    setTime({
      hours: initTime.hours,
      minutes: initTime.minutes,
      seconds: initTime.seconds,
    });
  }, [stopTimer, setTime, initTime]);

  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.seconds <= 0) {
            if (prevTime.minutes <= 0) {
              if (prevTime.hours <= 0) {
                stopTimer();
                return prevTime;
              } else {
                return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
              }
            } else {
              return {
                ...prevTime,
                minutes: prevTime.minutes - 1,
                seconds: 59,
              };
            }
          } else {
            return { ...prevTime, seconds: prevTime.seconds - 1 };
          }
        });
      }, 1000);
    }

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <Input onInitTime={setInitTime} onTime={setTime} />
      <div className="font-timer text-[128px]">
        <span>{formatValue(time.hours)}</span>:
        <span>{formatValue(time.minutes)}</span>:
        <span>{formatValue(time.seconds)}</span>
      </div>
      <div className="flex gap-[4px]">
        {!isRunning ? (
          <Button variant="outline" onClick={startTimer} className="!w-[50%]">
            Start
          </Button>
        ) : (
          <Button variant="outline" onClick={stopTimer} className="!w-[50%]">
            Pause
          </Button>
        )}
        <Button variant="outline" onClick={restartTimer} className="!w-[50%]">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;
