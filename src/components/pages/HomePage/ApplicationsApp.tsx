import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { RefObject } from "react";
import { buttonStyle } from "../../../styles";
import ApplicationsAppVideo from "../../../images/applications-app.mp4";

const ApplicationsApp = (props: {
  previous: RefObject<HTMLDivElement>;
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <Box>
      <Box ref={props.current} className="page bg-yellow">
        <Box>
          <Box className="project">
            <Box className="project-info">
              <Typography>Applications Application</Typography>
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
            <video className="project-screenshot" controls muted>
              <source src={ApplicationsAppVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Stack
            margin={3}
            direction="row"
            display="flex"
            justifyContent="space-evenly"
          >
            <Button
              sx={buttonStyle({ color: "secondary" })}
              onClick={() => {
                props.previous.current?.scrollIntoView();
              }}
            >
              Previous
            </Button>
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
    </Box>
  );
};
export default ApplicationsApp;
