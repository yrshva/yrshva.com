import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ProjectsPage from "./components/pages/ProjectsPage";
import Layout from "./components/shared/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { colors } from "./styles";

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: colors.main.lighter,
      },
    },
    typography: {
      fontSize: 15,
      fontFamily: [
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
      ].join(","),
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
