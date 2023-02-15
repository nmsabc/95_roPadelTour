const express = require("express");
const router = express.Router();
const { Posts, Users } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll({
    include: { model: Users },
    order: [["createdAt", "DESC"]],
  });
  res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  // const post = await Posts.findByPk(id);
  const post = await Posts.findOne({
    include: { model: Users },
    where: { id: id },
    order: [["createdAt", "DESC"]],
  });
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

//update post title and bodyText
router.put("/modPostTitle", validateToken, async (req, res) => {
  const newT = req.body.newTitle;
  const id = req.body.id;
  await Posts.update({ title: newT }, { where: { id: id } });
  res.json({ id: id, newT: newT });
});

router.put("/modPostText", validateToken, async (req, res) => {
  const newB = req.body.newBodyText;
  const id = req.body.id;
  await Posts.update({ postText: newB }, { where: { id: id } });
  res.json({ id: id, newB: newB });
});

module.exports = router;
