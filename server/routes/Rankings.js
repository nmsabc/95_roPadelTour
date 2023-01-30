const express = require("express");
const router = express.Router();
const { Rankings } = require("../models");

router.get("/", async (req, res) => {
  const listOfRankings = await Rankings.findAll();
  // res.json('here one will see the rankings ... this will be implemented in zUkUnFt!');
  res.json(listOfRankings);
});

router.post("/", async (req, res) => {
  const ranking = req.body;
  await Rankings.create(ranking);
  res.json(ranking);
});

module.exports = router;