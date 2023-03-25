import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle } from "../../../styles";
import CollectionServicesImage from "../../../images/collection-services.mp4";

const CollectionServices = (props: {
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
              <Typography>Collection Services</Typography>
              <Typography>
                The product was designed in Figma and developed in React +
                Typescript using Bootstrap. For portfolio use only. See it on{" "}
                <Link href="https://www.behance.net/gallery/150263943/German-collection-services/modules/848921161">
                  Behance
                </Link>
                .
              </Typography>
            </Box>
            <video className="project-screenshot" controls muted>
              <source src={CollectionServicesImage} type="video/mp4" />
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
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
export default CollectionServices;
