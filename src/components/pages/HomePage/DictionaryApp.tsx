import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle, colors, fontSizes } from "../../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../../styles/projectStyles";
import DictionaryAppImage from "../../../images/dictionary-app.png";

const DictionaryApp = (props: {
  previous: RefObject<HTMLDivElement>;
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <Box ref={props.current} bgcolor={colors.primary.main} sx={containerStyles}>
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 2, md: 4 }}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>
              Dictionary Application
            </Typography>
            <Typography>
              You can search for any word`s definition and listen to the word`s
              pronuncuation with the Dictionary Application. This product was
              developed in React using REST API, React Hooks, Bootstrap. See the{" "}
              <Link
                target="blank"
                href="https://github.com/yrshva/dictionary-app"
              >
                source code on GitHub
              </Link>{" "}
              or try{" "}
              <Link target="blank" href="https://wordbook-app.netlify.app/">
                demo
              </Link>{" "}
              to see how it works.
            </Typography>
          </Box>
          <img
            src={DictionaryAppImage}
            alt="dictionary application screenshot"
            style={projectImage}
          />
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
export default DictionaryApp;
