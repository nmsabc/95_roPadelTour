const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPasswd = await bcrypt.hash(password, salt);
  // Store hash in your password DB.
  await Users.create({ username: username, password: hashedPasswd });
  res.json({
    message: "done: user created ok",
  });
});

//login-route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  // no user present
  if (!user) {
    res.json({ error: "user does not exist!" });
  } else {
    // we contonue and also verify if the passwd was a correct one
    bcrypt.compare(password, user.password).then((result) => {
      if (result) {
        const accessToken = sign({
          username: user.username,
          id: user.id,
        }, "Geheim");
        res.json(accessToken);
      } else
        res.json({
          error: "login failed because of user-password combination!",
        });
    });
  }
});

module.exports = router;
