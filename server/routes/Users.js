const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  //   const hashedPasswd = await bcrypt.hash(password,salt);
  // Store hash in your password DB.
  //   await Users.create({ username: username, password: hashedPasswd });

  bcrypt.hash(password, saltRounds).then((hashedPasswd) => {
    Users.create({ username: username, password: hashedPasswd });
    res.json({
      message: "user was created",
      username: username,
      hash: hashedPasswd,
    });
  });
});

module.exports = router;
