const express = require("express");
const router = express.Router();  
const { Comments } = require("../models");

router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({ where: { PostId : postId } });
    res.json(comments);
  });

  
router.get("/", async (req, res) => {
    const listOfComments = await Comments.findAll();
    res.json(listOfComments);
  });
  
  router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const comments = await Comments.findByPk(id);
    res.json(comments);
  });
  
  router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
  });
  

module.exports = router;