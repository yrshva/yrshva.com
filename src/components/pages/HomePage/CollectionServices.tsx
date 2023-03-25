import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle, colors, fontSizes } from "../../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../../styles/projectStyles";
import CollectionServicesImage from "../../../images/collection-services.mp4";

const CollectionServices = (props: {
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
            <Typography fontSize={fontSizes.XL}>Collection Services</Typography>
            <Typography>
              The product was designed in Figma and developed in React +
              Typescript using Bootstrap. For portfolio use only. See it on{" "}
              <Link href="https://www.behance.net/gallery/150263943/German-collection-services/modules/848921161">
                Behance
              </Link>
              .
            </Typography>
          </Box>
          <video style={projectImage} controls muted>
            <source src={CollectionServicesImage} type="video/mp4" />
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
              props.previous.current?.scrollIntoView();
            }}
          >
            Previous
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default CollectionServices;
