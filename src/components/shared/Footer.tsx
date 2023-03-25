import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box, Link, Stack } from "@mui/material";
import { colors } from "../../styles";
const Footer = () => {
  const iconStyles = {
    color: colors.secondary.main,
    transition: "0.3s",
    "&:hover": {
      color: colors.secondary.light,
    },
  };
  return (
    <Box bgcolor={colors.primary.dark} paddingY="0.5rem">
      <Stack direction="row" spacing={2} display="flex" justifyContent="center">
        <Link
          id="email"
          href="mailto:anastasia.yershova@yahoo.com"
          title="Anastasiia's email"
          sx={iconStyles}
        >
          <AlternateEmailIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/anastasiia-yershova/"
          title="Anastasiia's LinkedIn"
          target="blank"
          sx={iconStyles}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://t.me/yrshva"
          target="blank"
          title="Anastasiia's Telegram"
          sx={iconStyles}
        >
          <TelegramIcon />
        </Link>
        <Link
          href="https://github.com/yrshva"
          target="blank"
          title="Anastasiia's Github"
          sx={iconStyles}
        >
          <GitHubIcon />
        </Link>
      </Stack>
    </Box>
  );
};
export default Footer;
