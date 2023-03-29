import React, { useState, useEffect } from "react";
import { DAYS, MONTHS } from "./DateFormat";

export const LocalTime = ({ timezone }: { timezone: number }) => {
  const date = new Date();
  const localTime =
    date.getTime() + (timezone + date.getTimezoneOffset() * 60) * 1000;
  const [dt, setDt] = useState(new Date(localTime));
  const minutes = dt.getMinutes();
  const hours = dt.getHours();
  const seconds = dt.getSeconds();

  const timeFormat = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setDt(new Date(localTime));
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [localTime]);
  return (
    <p>
      Local time:
      <br />
      {DAYS[dt.getDay()]}, {dt.getDate()} {MONTHS[dt.getMonth()]}{" "}
      {timeFormat(hours)}:{timeFormat(minutes)}:{timeFormat(seconds)}
    </p>
  );
};
