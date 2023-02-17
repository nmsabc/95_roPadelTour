const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");

baden =
  "https://api.openweathermap.org/data/2.5/weather?lat=48.00&lon=16.21&appid=e6a01a8a7d7cf235e594d91f349012fa";
router.get("/baden", async (req, res) => {
  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    redirect: "follow"
  };
  try {
    let result = await getApi(requestOptions);
    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

function getApi(requestOptions) {
  return fetch(
    baden,
    requestOptions
  ).then((res) => {
    return res.json();
  });
}

module.exports = router;

