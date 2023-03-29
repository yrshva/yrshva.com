import axios from "axios";
import { useState, useEffect } from "react";

import { LocalTime } from "./LocalTime";
import BeatLoader from "react-spinners/BeatLoader";
import "../styles/CurrentWeather.css";
import { coord, units, weatherDataProps } from "../types";

enum unitsMapping {
  "imperial" = "°F",
  "metric" = "°C",
}

export const CurrentWeather = (props: { city: coord | null; units: units }) => {
  const [weatherData, setWeatherData] = useState<null | weatherDataProps>(null);
  const [loaded, setLoaded] = useState(false);

  function showWeatherData(response: { data: weatherDataProps }) {
    setWeatherData(response.data);
  }

  useEffect(() => {
    const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    if (REACT_APP_WEATHER_API_KEY) {
      try {
        if (props.city) {
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${props.city?.lat}&lon=${props.city?.lon}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`;
          void axios.get(apiUrl).then(showWeatherData);
        } else alert("Please enter correct city");
      } catch (error) {
        alert("Please enter correct city");
      }
    } else throw new Error();
  }, [props.city]);
  useEffect(() => {
    setTimeout(() => {
      if (weatherData != null) {
        setLoaded(true);
      }
    }, 500);
  }, [weatherData]);
  if (loaded && weatherData) {
    let temp = Math.round(weatherData.main.temp);
    let tempMin = Math.round(weatherData.main.temp_min);
    let tempMax = Math.round(weatherData.main.temp_max);
    if (props.units === "imperial") {
      temp = Math.round(temp * 1.8 + 32);
      tempMin = Math.round(tempMin * 1.8 + 32);
      tempMax = Math.round(tempMax * 1.8 + 32);
    }

    return (
      <div className="weatherTodayWrap">
        <div className="weatherTodayContainer">
          <div className="weatherPositioning">
            <div className="leftBox">
              <h2>{weatherData.name}</h2>
              <LocalTime timezone={weatherData.timezone} />
            </div>
            <div className="rightBox">
              <h2>
                <span className="temperature">{temp}</span>
                <span className="temperature-scale">
                  {unitsMapping[props.units]}
                </span>
              </h2>
              <p>
                Wind: <span></span>
                {Math.round(weatherData.wind.speed)} km/h
                <br />
                Max: <span className="temperature">{tempMax}</span>
                <span className="temperature-scale">
                  {unitsMapping[props.units]}
                </span>{" "}
                | Min:
                <span className="temperature"> {tempMin}</span>
                <span className="temperature-scale">
                  {unitsMapping[props.units]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <BeatLoader
        color={"#a8d3f7"}
        loading={true}
        cssOverride={{ display: "block", margin: "auto", textAlign: "center" }}
        size={15}
      />
    );
  }
};
