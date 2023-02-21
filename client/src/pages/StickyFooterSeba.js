import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import OpenWeather from "./OpenWeather";

export default function StickyFooterSeba() {
  const citiesList = ["baden", "timisoara", "london"];
  const [weatherCity, setWeatherCity] = useState("baden");
  const [cityIndex, setCityIndex] = useState(0);

  function circularLoop(list) {
    let currentIndex = 0;
    return function () {
      let currentItem = list[currentIndex];
      currentIndex = (currentIndex + 1) % list.length;
      return currentItem;
    };
  }

  const loopFirstTwoCities = (city) => {
    if (city === citiesList[0] || city === "") {
      setWeatherCity(citiesList[1]);
    } else {
      setWeatherCity(citiesList[0]);
    }
  };

  const loopCities = (city) => {
    if (city === citiesList[cityIndex] || city === "") {
      let nextIndex = (cityIndex + 1) % citiesList.length;
      setCityIndex(nextIndex);
      setWeatherCity(citiesList[nextIndex]);
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
