import { Box } from "@mui/material";
import { useEffect } from "react";

import Resume from "./AboutPage/Resume";
import { ContactForm } from "../shared/ContactForm";
import { colors } from "../../styles";
import { containerStyles } from "../../styles/projectStyles";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box bgcolor={colors.primary.main}>
        <Box p="20px" sx={containerStyles}>
          <Resume />
        </Box>
      </Box>
      <Box id="contact" bgcolor={colors.secondary.main} sx={containerStyles}>
        <ContactForm type="block" />
      </Box>
    </>
  );
};
export default About;
