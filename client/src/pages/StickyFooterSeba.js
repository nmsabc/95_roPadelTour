import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import OpenWeather from "./OpenWeather";

export default function StickyFooterSeba() {
  const citiesList = ["baden", "timisoara", "london"];
  const citiesCountryList = [["baden", "at"], ["timisoara", "ro"], ["london", "uk"], ["vienna", "at"]];
  const [weatherCity, setWeatherCity] = useState("baden");
  const [weatherCountry, setWeatherCountry] = useState("at");
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
    console.log(cityIndex, citiesCountryList[cityIndex][0], citiesCountryList[cityIndex][1])
    if (city === citiesCountryList[cityIndex][0] || city === "") {
      let nextIndex = (cityIndex + 1) % citiesCountryList.length;
      setCityIndex(nextIndex);
      setWeatherCity(citiesCountryList[nextIndex][0]);
      setWeatherCountry(citiesCountryList[nextIndex][1]);
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
