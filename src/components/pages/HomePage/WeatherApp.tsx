import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { type RefObject } from "react";
import { buttonStyle, colors, fontSizes } from "../../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../../styles/projectStyles";
import WeatherAppImage from "../../../images/weather-app.png";

const WeatherApp = (props: {
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <Box
      ref={props.current}
      bgcolor={colors.secondary.main}
      sx={containerStyles}
    >
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 2, md: 4 }}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>Weather Application</Typography>
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
            style={projectImage}
          />
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          {" "}
          <Button
            sx={buttonStyle({ color: "primary" })}
            onClick={() => {
              props.next.current?.scrollIntoView();
            }}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default WeatherApp;
