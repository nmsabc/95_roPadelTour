const express = require("express");
const router = express.Router();
const db = require("../models");

// GET all championships
router.get("/", async (req, res) => {
  try {
    const championships = await db.PadelChampionship.findAll();
    res.status(200).json(championships);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET a championship by id
router.get("/:id", async (req, res) => {
  try {
    const championship = await db.PadelChampionship.findByPk(req.params.id);
    if (championship) {
      res.status(200).json(championship);
    } else {
      res.status(404).json({ message: "Championship not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// CREATE a new championship
router.post("/", async (req, res) => {
  try {
    const championship = await db.PadelChampionship.create(req.body);
    res.status(201).json(championship);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// UPDATE a championship by id
router.put("/:id", async (req, res) => {
  try {
    const championship = await db.PadelChampionship.findByPk(req.params.id);
    if (championship) {
      await championship.update(req.body);
      res.status(200).json(championship);
    } else {
      res.status(404).json({ message: "Championship not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE a championship by id
router.delete("/:id", async (req, res) => {
  try {
    const championship = await db.PadelChampionship.findByPk(req.params.id);
    if (championship) {
      await championship.destroy();
      res.status(204).json({ message: "Championship deleted successfully" });
    } else {
      res.status(404).json({ message: "Championship not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
