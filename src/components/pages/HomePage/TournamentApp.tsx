import { RefObject } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { buttonStyle } from "../../../styles";
import TournamentAppImage from "../../../images/tournament-app.png";

const TournamentApp = (props: {
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
              <Typography>Tournament App</Typography>
              <Typography>
                The product was developed in React using <strong>Redux</strong>,
                React Hooks, Bootstrap. System can add as many teams as needed,
                initially should start with none. After adding a new team it is
                added on the bottom of a table and automatically paired with
                other teams (all teams play one game with others). For a win,
                team gets 3 points, draw - 1, lost - 0. Table is ordered
                according to total points. See the{" "}
                <Link href="https://github.com/yrshva/tournament">
                  source code on GitHub
                </Link>{" "}
                or try{" "}
                <Link href="https://sport-tournament.netlify.app/">demo</Link>{" "}
                to see how it works.
              </Typography>
            </Box>
            <img
              src={TournamentAppImage}
              alt="tournament application screenshot"
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
export default TournamentApp;
