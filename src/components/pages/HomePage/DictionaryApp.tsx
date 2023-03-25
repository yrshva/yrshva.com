import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle } from "../../../styles";
import DictionaryAppImage from "../../../images/dictionary-app.png";

const DictionaryApp = (props: {
  previous: RefObject<HTMLDivElement>;
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <Box>
      <Box ref={props.current} className="page bg-blue">
        <Box>
          <Box className="project">
            <Box className="project-info">
              <Typography>Dictionary Application</Typography>
              <Typography>
                You can search for any word`s definition and listen to the
                word`s pronuncuation with the Dictionary Application. This
                product was developed in React using REST API, React Hooks,
                Bootstrap. See the{" "}
                <Link href="https://github.com/yrshva/dictionary-app">
                  source code on GitHub
                </Link>{" "}
                or try{" "}
                <Link href="https://wordbook-app.netlify.app/">demo</Link> to
                see how it works.
              </Typography>
            </Box>
            <img
              src={DictionaryAppImage}
              alt="dictionary application screenshot"
              className="project-screenshot"
            />
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
export default DictionaryApp;
