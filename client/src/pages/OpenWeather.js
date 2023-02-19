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
  let owm_ver = "2.5";

  useEffect(() => {
    axios
      .get(`http://localhost:3213/weather/${weatherCity}`, {
        headers: {
          owm_ver: owm_ver,
        },
      })
      .then((res_w) => {
        if (owm_ver === "2.5") {
          setTemp(round(res_w.data.main.temp - 273.15, 3));
          setWeatherDescription(res_w.data.weather[0].description);
          setWindSpeed(res_w.data.wind.speed);
        } 
        if (owm_ver === "3.0") {
          console.log(res_w)
          setTemp(res_w.data.current.temp);
          setWeatherDescription(res_w.data.current.temp.description);
          setWindSpeed(res_w.data.current.wind_speed);
        }
      });
  }, [weatherCity, owm_ver]);

  return (
    <>
      {" "}
      {ld.capitalize(weatherDescription)}
      {" in "}
      {ld.capitalize(weatherCity)}
      {" with "}
      {temp}
      {" °C and wind speed of "}
      {windSpeed}
      <LoopIcon onClick={() => loopCities(weatherCity)} />
    </>
  );
}

export default OpenWeather;
