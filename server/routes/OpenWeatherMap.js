const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
require("dotenv").config();

const url30 = "https://api.openweathermap.org/data/3.0/onecall";
const met = "metric";

//tm si baden lat si lon
const lat_tm = 45.806107;
const lon_tm = 21.237475;
const lat_b = 48.00;
const lon_b = 16.21;

const timisoara = `https://api.openweathermap.org/data/2.5/weather?q=Timisoara,ro&APPID=${process.env.RPT_API_KEY}`;
const london = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.RPT_API_KEY}`;
const baden = `https://api.openweathermap.org/data/2.5/weather?lat=48.00&lon=16.21&APPID=${process.env.RPT_API_KEY}`;
const vienna = `https://api.openweathermap.org/data/2.5/weather?q=Vienna,at&APPID=${process.env.RPT_API_KEY}`;
// const baden30 = `${url30}?lat=${lat_b}&lon=${lon_b}&units=${met}&appid=${process.env.RPT_API_KEY}`;
// const timisoara30 = `${url30}?lat=${lat_tm}&lon=${lon_tm}&units=${met}&appid=${process.env.RPT_API_KEY}`;

router.get("/:city", async (req, res) => {
  city_req = req.params.city;
  owm_ver = req.header("owm_ver");
  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    redirect: "follow",
  };
  let result = await getApi(requestOptions, city_req, owm_ver);
  try {
    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

async function getApi(requestOptions, ci, owm_ver) {
  if (ci === "baden" && owm_ver === "2.5") {
    city_to_req = baden;
  }
  // if (ci === "baden" && owm_ver === "3.0") {
  //   city_to_req = baden30;
  // }
  if (ci === "timisoara" && owm_ver === "2.5") {
    city_to_req = timisoara;
  }
  // if (ci === "timisoara" && owm_ver === "3.0") {
  //   city_to_req = timisoara30;
  // }
  if (ci === "london" && owm_ver === "2.5") {
    city_to_req = london;
  }
  if (ci === "vienna" && owm_ver === "2.5") {
    city_to_req = vienna;
  }
  console.log(city_to_req)


  const res = await fetch(city_to_req, requestOptions);
  return await res.json();
}

module.exports = router;
