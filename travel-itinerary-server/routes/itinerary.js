const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary');

// CREATE Itinerary
router.post('/', async (req, res) => {
  try {
    const itinerary = await Itinerary.create(req.body);
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ Itineraries
router.get('/', async (req, res) => {
  try {
    const itineraries = await Itinerary.findAll();
    res.status(200).json(itineraries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ Itinerary by ID
router.get('/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findByPk(req.params.id);
    if (itinerary) {
      res.status(200).json(itinerary);
    } else {
      res.status(404).json({ error: 'Itinerary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE Itinerary
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Itinerary.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedItinerary = await Itinerary.findByPk(req.params.id);
      res.status(200).json(updatedItinerary);
    } else {
      res.status(404).json({ error: 'Itinerary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE Itinerary
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Itinerary.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Itinerary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
