import { useState, useEffect } from "react";
import axios from "axios";
import { ForecastDay } from "./ForecastDay";
import { coord, units, forecastData, dailyForecastData } from "../types";
import "../styles/Forecast.css";

export default function Forecast(props: { city: coord; units: units }) {
  const [forecastData, setForecastData] = useState<dailyForecastData[] | null>(
    null
  );
  const [loaded, setLoaded] = useState(false);
  const showForecast = (response: forecastData) => {
    setForecastData(response.data.daily);
  };
  useEffect(() => {
    const getForecast = async () => {
      const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      if (REACT_APP_WEATHER_API_KEY) {
        try {
          const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.city.lat}&lon=${props.city.lon}&exclude=current,hourly,minutely,alerts&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`;
          await axios.get(apiUrl).then(showForecast);
        } catch (error) {
          console.log("Something went wrong");
        }
      } else console.log("Something went wrong");
    };
    getForecast().catch(console.error);
  }, [props.city]);

  useEffect(() => {
    setTimeout(() => {
      if (forecastData != null) {
        setLoaded(true);
      }
    }, 500);
  }, [forecastData]);

  if (loaded && forecastData) {
    return (
      <div className="container forecast-wrap">
        <div className="row d-flex justify-content-center">
          {forecastData.map(function (dailyForecast, index) {
            if (index > 0) {
              return (
                <ForecastDay
                  key={index}
                  data={dailyForecast}
                  units={props.units}
                />
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else return null;
}
