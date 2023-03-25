import { darken } from "@mui/material";

export const colors = {
  primary: {
    main: "#5AA7FF",
    dark: "#479DFF",
    x_dark: "#278cff",
  },
  secondary: {
    main: "#EEC508",
    light: "#FADF63",
    dark: "#e9c207",
    x_dark: "#bc9d06",
  },
  main: {
    main: "#212529",
    lighter: "#363636",
  },
};

export const codeFontFamily = [
  "source-code-pro",
  "Menlo",
  "Monaco",
  "Consolas",
  "Courier New",
].join(",");

export const mainFontFamily = [
  "-apple -system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
].join(",");

export const fontSizes = {
  M: 15,
  L: 18,
  XL: 24,
  XXL: 32,
};

export const buttonStyle = ({
  color,
  variant,
}: {
  color?: "primary" | "secondary";
  variant?: "outline" | "fill";
}) => {
  const border =
    color === "secondary" ? colors.secondary.x_dark : colors.primary.dark;
  const bg =
    variant === "outline"
      ? undefined
      : color === "primary"
      ? colors.primary.x_dark
      : colors.secondary.dark;

  return {
    "border-radius": "10px",
    width: "150px",
    height: "55px",
    border: `4px double ${border}`,
    transition: "0.4s",
    color: colors.main.lighter,
    "background-color": bg,
    "&:hover": {
      "background-color": darken(bg ?? border, 0.08),
    },
  };
};
