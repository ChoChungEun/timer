import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import "react-clock/dist/Clock.css";
import { Clock as ReClock } from "react-clock";

const Clock = ({ city }: { city: string }) => {
  const [date, setDate] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        // API 호출하여 현재 UTC 시간 가져오기
        const response = await axios.get(
          `http://worldtimeapi.org/api/timezone/${city}`
        );
        const datetime = moment(response.data.datetime).tz(city);

        setYear(datetime.format("YYYY"));
        setDate(datetime.format("MMMM D"));
        setDay(datetime.format("dddd"));
        setTime(datetime.format("HH:mm:ss A"));
      } catch (err) {
        setError("Error fetching time");
      }
    };

    fetchTime();

    // 매초마다 시간을 업데이트
    const interval = setInterval(() => {
      const now = moment().tz(city);
      setYear(now.format("YYYY"));
      setDate(now.format("MMMM D"));
      setDay(now.format("dddd"));
      setTime(now.format("HH:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, [city]);

  if (error) return <div>{error}</div>;

  if (!time || !date || !day) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <ReClock value={time} renderMinuteMarks={false} />
      <div>{time}</div>
      <div>{`${day}, ${date}, ${year}`}</div>
    </div>
  );
};

export default Clock;
