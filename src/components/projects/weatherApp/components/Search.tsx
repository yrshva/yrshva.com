import { Box } from "@mui/material";
import GridLoader from "react-spinners/GridLoader";
import DatalistInput, { startsWithValueFilter } from "react-datalist-input";
import axios from "axios";
import cities from "cities.json";
import React, { useState, useCallback, useMemo, useEffect } from "react";

import { CurrentWeather } from "./CurrentWeather";
import Forecast from "./Forecast";
import "../styles/Search.css";
import "../styles/Datalist.css";
import { cityProps, coord, units } from "../types";

export const Search = () => {
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState("");
  const [coord, setCoord] = useState<null | coord>(null);
  const [units, setUnits] = useState<units>("metric");

  const showCity = (response: { data: coord }) => {
    setCoord({ lat: response.data.lat, lon: response.data.lon });
  };
  const showCurrentLocation = async () => {
    const REACT_APP_IP_API_KEY = process.env.REACT_APP_IP_API_KEY;
    if (REACT_APP_IP_API_KEY) {
      try {
        const apiUrl = `https://extreme-ip-lookup.com/json/?key=${REACT_APP_IP_API_KEY}`;
        await axios.get(apiUrl).then(showCity);
      } catch (error) {
        console.log(`Something went wrong`);
      }
    } else console.log(`Something went wrong`);
  };
  const handleCurrentLocation = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    await showCurrentLocation();
  };
  const showFahrenheit = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setUnits("imperial");
  };
  const showCelsius = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setUnits("metric");
  };
  const items = useMemo(
    () =>
      (cities as cityProps[]).map((city, index) => ({
        id: index,
        value: `${city.name}, ${city.country}`,
        lng: city.lng,
        lat: city.lat,
      })),
    []
  );
  const limitOptionsFilter = useCallback(
    (items: cityProps[]) => items.slice(0, 10),
    []
  );
  const filters = [startsWithValueFilter, limitOptionsFilter];

  if (coord === null) {
    showCurrentLocation().catch(console.error);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, [coord]);

  if (loaded && coord) {
    return (
      <Box>
        <Box className="searchBox">
          <Box className="scale">
            <a href="/" onClick={() => showFahrenheit}>
              °F
            </a>
            <span> | </span>
            <a href="/" onClick={() => showCelsius}>
              °C
            </a>
          </Box>
          <Box className="search">
            <DatalistInput
              value={value}
              label=""
              setValue={setValue}
              placeholder="Start entering the city"
              items={items}
              filters={filters}
              onSelect={(item) => {
                setCoord({ lat: item.lat, lon: item.lng });
                setValue("");
              }}
            />
            <a href="/" onClick={() => handleCurrentLocation}>
              Show current location weather
            </a>
          </Box>
        </Box>
        <CurrentWeather city={coord} units={units} />
        <Forecast city={coord} units={units} />
      </Box>
    );
  } else {
    return (
      <Box style={{ width: "100%", height: "100vh" }}>
        <GridLoader
          color={"#a8d3f7"}
          loading={true}
          cssOverride={{
            display: "block",
            margin: "0 auto",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          size={30}
        />
      </Box>
    );
  }
};
