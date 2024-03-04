
const event = require('../models/eventModel');

const eventController = {
  getAllEvent: (req, res) => {
    event.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },
  
  getEventById: (req, res) => {
    const id = req.params.id;
    event.getById(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'event not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },
  
  createEvent: (req, res) => {
    const eventData = req.body;
    event.create(eventData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'event created successfully' });
      }
    });
  },
  
  updateEvent: (req, res) => {
    const id = req.params.id;
    const eventData = req.body;
    event.update(id, eventData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'event not found' });
      } else {
        res.status(200).json({ message: 'event updated successfully' });
      }
    });
  },
  
  deleteEvent: (req, res) => {
    const id = req.params.id;
    event.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'event not found' });
      } else {
        res.status(200).json({ message: 'event deleted successfully' });
      }
    });
  }
};

module.exports = eventController