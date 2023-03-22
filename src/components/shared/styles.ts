export const buttonStyle = ({
  color,
  variant,
}: {
  color?: string;
  variant?: string;
}) => {
  const border = color === "blue" ? "#278cff" : "#bc9d06";
  const bg =
    variant === "outline"
      ? undefined
      : color === "blue"
      ? "#5aa7ff"
      : "#e9c207";
  return {
    "border-radius": "10px",
    width: "150px",
    height: "55px",
    border: `4px double ${border}`,
    transition: "0.3s",
    color: "#353637",
    "background-color": bg,
  };
};
