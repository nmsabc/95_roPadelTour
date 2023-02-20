import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { round } from "lodash";
import LoopIcon from "@mui/icons-material/Loop";
let ld = require("lodash");
// const MongoClient = require("mongodb").MongoClient;

function insertDataInMongo(weatherCity, temp, windSpeed) {
  console.log("almost there ...")
  // Connect to MongoDB
  // const uri = "mongodb://root:secret@localhost:27017/mongo-rpt";
  // const client = new MongoClient(uri, { useNewUrlParser: true });
  // client.connect((err) => {
  //   const collection = client.db("mongo-rpt").collection("weather");

  //   // Insert a document with timestamp, temp, and location
  //   collection.insertOne(
  //     {
  //       timestamp: new Date(),
  //       location: weatherCity,
  //       temp: temp,
  //       windSpeed: windSpeed,
  //     },
  //     (err, result) => {
  //       if (err) throw err;
  //       console.log("Document inserted");
  //       client.close();
  //     }
  //   );
  // });
}

function OpenWeather({ weatherCity, loopCities }) {
  const [temp, setTemp] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  let owm_ver = "2.5";
  let mongo = true;

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
          console.log(res_w);
          setTemp(res_w.data.current.temp);
          setWeatherDescription(res_w.data.current.temp.description);
          setWindSpeed(res_w.data.current.wind_speed);
        }
        if (mongo) {
          insertDataInMongo(weatherCity, temp, windSpeed);
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
