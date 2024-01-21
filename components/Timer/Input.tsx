import React, {
  FunctionComponent,
  memo,
  useState,
  ChangeEvent,
  MouseEvent,
} from "react";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";

interface InputProps {
  onTime: (value: string) => void;
  onType: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ onTime, onType }) => {
  const [value, setValue] = useState("");

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleClickSaveTime = () => {
    onTime(value);
  };

  const handleClickType = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
    onType(value);
  };

  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex justify-between gap-[4px]">
        <Button
          variant="filled"
          value="hour"
          onClick={handleClickType}
          className="!w-[33.333%]"
        >
          시
        </Button>
        <Button
          variant="filled"
          value="minutes"
          onClick={handleClickType}
          className="!w-[33.333%]"
        >
          분
        </Button>
        <Button
          variant="filled"
          value="second"
          onClick={handleClickType}
          className="!w-[33.333%]"
        >
          초
        </Button>
      </div>
      <div className="flex gap-[4px]">
        <TextInput
          placeholder="Input placeholder"
          value={value}
          onChange={handleTimeChange}
        />
        <Button variant="filled" onClick={handleClickSaveTime}>
          설정
        </Button>
      </div>
    </div>
  );
};

export default memo(Input);
