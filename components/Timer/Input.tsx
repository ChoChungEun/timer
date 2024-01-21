import React, { FunctionComponent, memo, useState } from "react";
import { Select } from "@mantine/core";
import { Button } from "@mantine/core";
import { TimeState } from "./Timer";

interface InputProps {
  onInitTime: (value: TimeState) => void;
  onTime: (value: TimeState) => void;
}

const Input: FunctionComponent<InputProps> = ({ onInitTime, onTime }) => {
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  const handleClickHours: any = (value: any) => {
    setHours(value);
  };

  const handleClickMinutes: any = (value: any) => {
    setMinutes(value);
  };

  const handleClickSeconds: any = (value: any) => {
    setSeconds(value);
  };

  const handleClickSubmitTime = () => {
    const newHours = parseInt(hours);
    const newMinutes = parseInt(minutes);
    const newSeconds = parseInt(seconds);

    onInitTime({ hours: newHours, minutes: newMinutes, seconds: newSeconds });
    onTime({ hours: newHours, minutes: newMinutes, seconds: newSeconds });
  };

  const formatValue = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  const timeArray = (length: number) =>
    Array.from({ length }, (_, i) => formatValue(i));

  const HOURS = timeArray(24);
  const MINUTES = timeArray(60);
  const SECONDS = timeArray(60);

  return (
    <div className="w-[300px] flex flex-col gap-[4px]">
      <div className="flex justify-between gap-[4px]">
        <Select
          label="시"
          data={HOURS}
          value={hours}
          onChange={handleClickHours}
          className="!w-[33.333%]"
        />
        <Select
          label="분"
          data={MINUTES}
          value={minutes}
          onChange={handleClickMinutes}
          className="!w-[33.333%]"
        />
        <Select
          label="초"
          data={SECONDS}
          value={seconds}
          onChange={handleClickSeconds}
          className="!w-[33.333%]"
        />
      </div>
      <Button
        variant="filled"
        onClick={handleClickSubmitTime}
        className="w-[100%]"
      >
        타이머 설정
      </Button>
    </div>
  );
};

export default memo(Input);
