export * from "./forecastData";

export interface coord {
  lat: string;
  lon: string;
}

export interface cityProps {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

export interface weatherDataProps {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  timezone: number;
  name: string;
  wind: {
    speed: number;
  };
}
export type units = "imperial" | "metric";
