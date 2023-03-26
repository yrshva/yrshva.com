import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle, colors, fontSizes } from "../../../styles";
import {
  containerStyles,
  desriptionStyles,
} from "../../../styles/projectStyles";
import MobileDictionaryVideo from "../../../images/mobile-dictionary.mp4";

const MobileDictionary = (props: {
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
              Dictionary Application for iOS/Android
            </Typography>
            <Typography>
              Dictionary application with some new features like different
              accents`` pronunciation. Developed in React Native using
              Typescript, REST API, React Hooks and Audio player library. See
              the{" "}
              <Link
                target="blank"
                href="https://github.com/yrshva/react-native-dictionary-app"
              >
                source code on GitHub
              </Link>
              .
            </Typography>
          </Box>
          <video
            style={{ margin: "auto", maxWidth: "300px", borderRadius: "30px" }}
            controls
            muted
          >
            <source src={MobileDictionaryVideo} type="video/mp4" />
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
export default MobileDictionary;
