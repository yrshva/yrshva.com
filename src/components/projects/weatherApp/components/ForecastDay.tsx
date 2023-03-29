import React from "react";
import { MONTHS, DAYS } from "./DateFormat";
import { dailyForecastData, units } from "../types";

enum unitsMapping {
  "imperial" = "°F",
  "metric" = "°C",
}

export const ForecastDay = (props: {
  data: dailyForecastData;
  units: units;
}) => {
  const day = () => {
    const date = new Date(props.data.dt * 1000);
    return `${DAYS[date.getDay()]}, ${date.getDate()} ${
      MONTHS[date.getMonth()]
    }`;
  };
  let temp = Math.round(props.data.temp.day);
  let tempMin = Math.round(props.data.temp.min);
  let tempMax = Math.round(props.data.temp.max);
  if (props.units === "imperial") {
    temp = Math.round(temp * 1.8 + 32);
    tempMax = Math.round(tempMax * 1.8 + 32);
    tempMin = Math.round(tempMin * 1.8 + 32);
  }
  return (
    <div className="col-auto">
      <div className="forecast shadow">
        <h6 className="week-day">{day()}</h6>
        <h2>
          <span className="temperature forecast-temp">{temp}</span>
          <span className="temperature-scale">{unitsMapping[props.units]}</span>
        </h2>
        <p>
          Max: {tempMax}
          <span className="temperature-scale">
            {unitsMapping[props.units]}
          </span>{" "}
          <br />
          Min: {tempMin}
          <span className="temperature-scale">
            {unitsMapping[props.units]}
          </span>{" "}
          <br />
          Wind: {Math.round(props.data.wind_speed)} km/h
        </p>
      </div>
    </div>
  );
};
