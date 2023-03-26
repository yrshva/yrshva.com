import { CSSProperties } from "react";
import { mainFontFamily, colors } from ".";

export const linkStyles = {
  color: colors.main.lighter,
  transition: "0.3s",
  textDecoration: "none",
  margin: "0 10px",
};
export const fullHeaderStyles: CSSProperties = {
  position: "relative",
  display: "flex",
  maxWidth: "1300px",
  width: "100%",
  padding: "0 10px",
  lineHeight: "60px",
  fontFamily: mainFontFamily,
};
export const burgerWrapStyles: CSSProperties = {
  width: "100%",
  padding: "0 10px",
  lineHeight: "60px",
  backgroundColor: colors.primary.dark,
};
export const burgerIconStyles: CSSProperties = {
  lineHeight: "normal",
  position: "absolute",
  top: "10px",
  right: "10px",
};
export const burgerButtonStyles: CSSProperties = {
  background: "none",
  border: "solid rgb(42, 52, 83) 0.1px",
  borderRadius: "5px",
  transition: "0.2s",
};
