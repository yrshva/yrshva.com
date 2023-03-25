import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle } from "../../../styles";
import MobileDictionaryVideo from "../../../images/mobile-dictionary.mp4";

const MobileDictionary = (props: {
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
              <Typography>Dictionary Application for iOS/Android</Typography>
              <Typography>
                Dictionary application with some new features like different
                accents`` pronunciation. Developed in React Native using
                Typescript, REST API, React Hooks and Audio player library. See
                the{" "}
                <Link href="https://github.com/yrshva/react-native-dictionary-app">
                  source code on GitHub
                </Link>
                .
              </Typography>
            </Box>
            <video className="dictionary-video" controls muted>
              <source src={MobileDictionaryVideo} type="video/mp4" />
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
export default MobileDictionary;
