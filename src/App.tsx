import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Layout from "./components/shared/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { colors } from "./styles";

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: colors.primary.main,
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
  });
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
