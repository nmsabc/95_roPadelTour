const express = require("express");
const router = express.Router();
const { Players } = require("../models");

router.get("/", async (req, res) => {
  const listOfPlayers = await Players.findAll();
  res.json(listOfPlayers);
});

router.post("/", async (req, res) => {
  const player = req.body;
  await Players.create(player);
  res.json(player);
});

module.exports = router;
