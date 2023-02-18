import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import OpenWeather from "./OpenWeather";

export default function StickyFooterSeba() {
  const citiesList = ["baden", "timisoara" , "london"];
  const [weatherCity, setWeatherCity] = useState("baden");

  const loopCities = (city) => {
    if (city === citiesList[0] || city === "") {
      setWeatherCity(citiesList[1]);
    } else {
      setWeatherCity(citiesList[0]);
    }
  };
  return (
    <div>
      <Typography>
        <OpenWeather weatherCity={weatherCity} loopCities={loopCities} /> 
      </Typography>
      <Typography>
        Go padel Hard!
        {" ..:: "}
        {" Copyright © "} {new Date().getFullYear()}
        {" ::.. "}
        Ro Padel Tour ::
      </Typography>
    </div>
  );
}
