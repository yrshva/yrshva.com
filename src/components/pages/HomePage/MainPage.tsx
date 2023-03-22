import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import {
  swing,
  bounceInUp,
  slideInDown,
  slideInRight,
  zoomIn,
} from "react-animations";
import { useNavigate } from "react-router-dom";
import React, { RefObject } from "react";
import { ContactForm } from "../../shared/ContactForm";
import { buttonStyle } from "../../shared/styles";

const SlideInDown = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInDown}`};
`;

const SlideInRight = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInRight}`};
`;

const Name = styled.h2`
  color: #fadf63;
  font-weight: 700;
  animation: 1s ${keyframes`${zoomIn}`};
`;

const HandSwing = styled.div`
  display: inline-block;
  animation: 1s ${keyframes`${swing}`} infinite;
`;

const BounceIn = styled.div`
  animation: 1s ${keyframes`${bounceInUp}`};
`;


const MainPage = (props: { projects: RefObject<HTMLDivElement> }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box className="page bg-blue">
        <Box>
          <Typography >
            <HandSwing>👋</HandSwing>
            <SlideInDown>Hi</SlideInDown> <SlideInRight>I am</SlideInRight>
          </Typography>
          <Name>Anastasiia Yershova</Name>
          <Typography sx={{ opacity: "75%" }}>
            <SlideInDown>Frontend Developer based in the UK</SlideInDown>
          </Typography>
          <BounceIn className="buttons">

            <Button
              onClick={() =>
                props.projects.current &&
                props.projects.current.scrollIntoView()
              }
              sx={buttonStyle({ color: "yellow" })}
            >
              See my projects
            </Button>
            <Button onClick={handleOpen}
              sx={buttonStyle({ color: "blue" })}
            >
              Contact me
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ContactForm type="modal" />
            </Modal>
          </BounceIn>
        </Box>
      </Box>
    </Box >
  );
};
export default MainPage;
