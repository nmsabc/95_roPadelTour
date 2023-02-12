const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const { Posts, Users } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: {model: Users} });
  res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.get("/byUserId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findAll({ where: {} });
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

router.delete("/byId/:postId", validateToken, async (req, res) => {
  const id_of_post_to_del = req.params.postId;
  await Posts.destroy({ where: { id: id_of_post_to_del } });
  res.json({ id: id_of_post_to_del, message: "was deleted" });
});

module.exports = router;
