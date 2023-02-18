const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
require("dotenv").config();

const timisoara = `https://api.openweathermap.org/data/2.5/weather?q=Timisoara,ro&APPID=${process.env.OWM_DEFAUL_KEY}`;
const london = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.OWM_DEFAUL_KEY}`;
const baden = `https://api.openweathermap.org/data/2.5/weather?lat=48.00&lon=16.21&APPID=${process.env.OWM_DEFAUL_KEY}`;

router.get("/:city", async (req, res) => {
  city_req = req.params.city;
  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    redirect: "follow",
  };
  try {
    let result = await getApi(requestOptions, city_req);
    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

function getApi(requestOptions, ci) {
  if (ci === "baden") {
    city_to_req = baden;
  }
  if (ci === "timisoara") {
    city_to_req = timisoara;
  }
  if (ci === "london") {
    city_to_req = london;
  }

  return fetch(city_to_req, requestOptions).then((res) => {
    return res.json();
  });
}

module.exports = router;
