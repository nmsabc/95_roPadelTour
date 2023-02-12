const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/byPostId/:PostId", async (req, res) => {
  const PostId = req.params.PostId;
  const comments = await Comments.findAll({
    where: { PostId: PostId },
    order: [["createdAt", "DESC"]],
  });
  res.json(comments);
});

router.get("/", async (req, res) => {
  const listOfComments = await Comments.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.json(listOfComments);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const comments = await Comments.findByPk(id);
  res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const logedInUsename = req.user.username;
  comment.username = logedInUsename;
  comment.UserId = 1;
  await Comments.create(comment);
  res.json({
    id: comment.id,
    message: "comment was just created",
  });
});

router.delete("/byId/:commentId", validateToken, async (req, res) => {
  const commentId = req.params.commentId;
  await Comments.destroy({ where: { id: commentId } });
  res.json({
    id: commentId,
    message: "comment was deleted ",
  });
});

module.exports = router;
