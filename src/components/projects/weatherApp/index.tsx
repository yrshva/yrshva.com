import { Box } from "@mui/material";
import { Search } from "./components/Search";
import Footer from "./components/Footer";
import "./styles/App.css";

export const WeatherApp = () => {
  return (
    <Box className="App">
      <Search />
      <Footer />
    </Box>
  );
};
