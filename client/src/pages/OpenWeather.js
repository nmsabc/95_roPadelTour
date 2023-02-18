import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { round } from "lodash";
import LoopIcon from "@mui/icons-material/Loop";
let ld = require("lodash");

function OpenWeather({ weatherCity, loopCities }) {
  const [temp, setTemp] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3213/weather/${weatherCity}`)
      .then((res_w) => {
        setTemp(round(res_w.data.main.temp - 273.15, 3));
        setWeatherDescription(res_w.data.weather[0].description);
        setWindSpeed(res_w.data.wind.speed)
      });
  }, [weatherCity]);

  return (
    <>
      {" "}
      {ld.capitalize(weatherDescription)}
      {" in "}
      {ld.capitalize(weatherCity)}
      {" with "}
      {temp} 
      {" °C "}
      {"and wind spped of "}
      {windSpeed}
      <LoopIcon onClick={() => loopCities(weatherCity)} />
    </>
  );
}

export default OpenWeather;
