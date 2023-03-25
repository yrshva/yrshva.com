import { Box, Button, Link, Typography } from "@mui/material";
import { type RefObject } from "react";
import { buttonStyle } from "../../../styles";
import WeatherAppImage from "../../../images/weather-app.png";
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
              <Typography>Weather Application</Typography>
              <Typography>
                The designed product shows real-time weather forecast in over
                200,000 cities. The Weather Application was developed in React
                using REST API, React Hooks, Bootstrap. See the{" "}
                <Link href="https://github.com/yrshva/weather-forecast-app-with-select">
                  source code on GitHub
                </Link>{" "}
                or try{" "}
                <Link href="https://weather-forecast-all-cities.netlify.app/">
                  demo
                </Link>{" "}
                to see how it works.
              </Typography>
            </Box>
            <img
              src={WeatherAppImage}
              alt="weather application screenshot"
              className="project-screenshot"
            />
          </Box>
          <Box className="mt-3">
            <Button
              sx={buttonStyle({ color: "primary" })}
              onClick={() => {
                props.next.current?.scrollIntoView();
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default WeatherApp;
