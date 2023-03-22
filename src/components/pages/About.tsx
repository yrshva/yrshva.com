import { Box } from "@mui/material";
import React, { useEffect } from "react";

import Resume from "./AboutPage/Resume";
import { ContactForm } from "../shared/ContactForm";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box className="page bg-blue about-page">
        <Box className="cv-wrapper">
          <Resume />
        </Box>
      </Box>
      <Box className="page bg-yellow contact-page" id="contact">
        <ContactForm type="block" />
      </Box>
    </>
  );
};
export default About;
