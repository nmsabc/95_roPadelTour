const express = require('express');
const router = express.Router();
const db = require('../models');
const PadelEvent = db.PadelEvent;

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await PadelEvent.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// GET an event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await PadelEvent.findOne({ where: { id: req.params.id } });
    if (event) {
      res.json(event);
    } else {
      res.status(404).send({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// CREATE an event
router.post('/', async (req, res) => {
  try {
    const event = await PadelEvent.create(req.body);
    res.json(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// UPDATE an event
router.put('/:id', async (req, res) => {
  try {
    const event = await PadelEvent.findOne({ where: { id: req.params.id } });
    if (event) {
      const updatedEvent = await event.update(req.body);
      res.json(updatedEvent);
    } else {
      res.status(404).send({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// DELETE an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await PadelEvent.findOne({ where: { id: req.params.id } });
    if (event) {
      await event.destroy();
      res.json({ message: 'Event deleted successfully' });
    } else {
      res.status(404).send({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
