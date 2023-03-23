import { Box } from "@mui/material";
import React, { type RefObject } from "react";

const WeatherApp = (props: {
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <Box>
      <Box ref={props.current} className="page bg-yellow">
        <Box>
          <Box className="project">
            <Box className="project-info">
              <h3>Weather Application</h3>
              <p>
                The designed product shows real-time weather forecast in over
                200,000 cities. The Weather Application was developed in React
                using REST API, React Hooks, Bootstrap. See the{" "}
                <a href="https://github.com/yrshva/weather-forecast-app-with-select">
                  source code on GitHub
                </a>{" "}
                or try{" "}
                <a href="https://weather-forecast-all-cities.netlify.app/">
                  demo
                </a>{" "}
                to see how it works.
              </p>
            </Box>
            <img
              src={require("../../../images/weather-app.png")}
              alt="weather application screenshot"
              className="project-screenshot"
            />
          </Box>
          <Box className="mt-3">
            <button
              className="btn-custom btn-blue"
              onClick={() => { props.next.current?.scrollIntoView(); }
              }
            >
              Next
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default WeatherApp;
