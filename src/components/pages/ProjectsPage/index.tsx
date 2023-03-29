import { Box, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { colors } from "../../../styles";
import { projectNames } from "../../../types";
import { WeatherApp } from "../../projects/WeatherApp";

interface LinkTabProps {
  label: string;
  href: string;
}

const LinkTab = (props: LinkTabProps) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
};
enum ProjectIndex {
  "weatherApp" = 0,
  "dictionaryApp" = 1,
}
const ProjectsPage = ({ projectName }: { projectName: projectNames }) => {
  const [value, setValue] = useState(ProjectIndex[projectName]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Project = () => {
    switch (projectName) {
      case "dictionaryApp":
        return <>not implemented</>;
      case "weatherApp":
      default:
        return <WeatherApp />;
    }
  };
  return (
    <Box
      minHeight="100vh"
      paddingY="60px"
      width="100%"
      bgcolor={colors.primary.main}
    >
      <Box data-id="subNav" width="100%">
        <Tabs value={value} onChange={handleChange} centered>
          <LinkTab label="Weather App" href="/projects/weatherApp" />
          <LinkTab label="Dictionary App" href="/projects/dictionaryApp" />
        </Tabs>
      </Box>
      <Box maxWidth="1200px">
        <Project />
      </Box>
    </Box>
  );
};
export default ProjectsPage;
