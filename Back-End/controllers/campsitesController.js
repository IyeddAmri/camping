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

  updateCampsite: (id, updatedData, callback) => {
    const sql = "UPDATE campsites SET ? WHERE CampsiteID=?";
    const values = [updatedData, id];
  
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error during update:', err);
        callback(err, null);
      } else {
        console.log('SQL Query:', sql, values);
        callback(null, results);
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
  },
  likeCampsite: (req, res) => {
    const campsiteId = req.params.id;
  
    campsitesModel.likeCampsite(campsiteId, (err, results) => {
      if (err) {
        console.error('Error liking campsite:', err);
        res.status(500).json({ error: 'Failed to like campsite' });
      } else {
        res.json({ message: 'Campsite liked successfully' });
      }
    });
  },
  
};

module.exports = campsitesController;
