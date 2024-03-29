import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { RefObject } from "react";
import { buttonStyle, colors, fontSizes } from "../../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../../styles/projectStyles";
import ApplicationsAppVideo from "../../../images/applications-app.mp4";

const ApplicationsApp = (props: {
  previous: RefObject<HTMLDivElement>;
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
            <Typography fontSize={fontSizes.XL}>
              Applications Application
            </Typography>
            <Typography>
              A small application in React + Typescript using REST API,
              Bootstrap, json-server. The data in the table is loaded from the
              server. All the fields contain validation, form has appropriate
              checks before submitting (disable Buttons or others) See the{" "}
              <Link
                href="https://github.com/yrshva/fake-applications"
                target="blank"
              >
                source code on GitHub
              </Link>
              .
            </Typography>
          </Box>
          <video style={projectImage} controls muted>
            <source src={ApplicationsAppVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <Button
            sx={buttonStyle({ color: "secondary" })}
            onClick={() => {
              props.previous.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Previous
          </Button>
          <Button
            sx={buttonStyle({ color: "primary" })}
            onClick={() => {
              props.next.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default ApplicationsApp;
