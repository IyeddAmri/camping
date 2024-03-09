const campsitesModel = require('../models/campsitesmodel');

const campsitesController = {
  getAllCampsites: (req, res) => {
    campsitesModel.getAllCampsites((err, results) => {
      if (err) {
        console.error('Error fetching campsites:', err);
        res.status(500).json({ error: 'Failed to fetch campsites' });
      } else {
        res.json(results);
      }
    });
  },

  getCampsiteById: (req, res) => {
    const campsiteId = req.params.id;
    campsitesModel.getCampsiteById(campsiteId, (err, result) => {
      if (err) {
        console.error('Error fetching campsite by ID:', err);
        res.status(500).json({ error: 'Failed to fetch campsite' });
      } else if (!result.length) {
        res.status(404).json({ error: 'Campsite not found' });
      } else {
        res.json(result[0]);
      }
    });
  },

  createCampsite: (req, res) => {
    const campsiteData = req.body;
    campsitesModel.createCampsite(campsiteData, (err, result) => {
      if (err) {
        console.error('Error creating campsite:', err);
        res.status(500).json({ error: 'Failed to create campsite' });
      } else {
        res.json({ message: 'Campsite created successfully', id: result.insertId });
      }
    });
  },

  updateCampsite: (req, res) => {
    const campsiteId = req.params.id;
    const campsiteData = req.body;
    campsitesModel.updateCampsite(campsiteId, campsiteData, (err) => {
      if (err) {
        console.error('Error updating campsite:', err);
        res.status(500).json({ error: 'Failed to update campsite' });
      } else {
        res.json({ message: 'Campsite updated successfully' });
      }
    });
  },
  deleteCampsite: (req, res) => {
    const campsiteId = req.params.id;
    campsitesModel.deleteCampsite(campsiteId, (err) => {
      if (err) {
        console.error('Error deleting campsite:', err);
        res.status(500).json({ error: 'Failed to delete campsite' });
      } else {
        res.json({ message: 'Campsite deleted successfully' });
      }
    });
  }
};

module.exports = campsitesController;
