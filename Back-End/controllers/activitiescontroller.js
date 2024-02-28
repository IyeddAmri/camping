const activityModel = require('../models/activitiesmodel');

const activityController = {
  getAllActivities: (req, res) => {
    activityModel.getAllActivities((err, results) => {
      if (err) {
        console.error('Error fetching activities:', err);
        res.status(500).json({ error: 'Failed to fetch activities' });
      } else {
        res.json(results);
      }
    });
  },

  getActivityById: (req, res) => {
    const activityId = req.params.id;
    activityModel.getActivityById(activityId, (err, result) => {
      if (err) {
        console.error('Error fetching activity by ID:', err);
        res.status(500).json({ error: 'Failed to fetch activity' });
      } else if (!result.length) {
        res.status(404).json({ error: 'Activity not found' });
      } else {
        res.json(result[0]);
      }
    });
  },

  createActivity: (req, res) => {
    const activityData = req.body;
    activityModel.createActivity(activityData, (err, result) => {
      if (err) {
        console.error('Error creating activity:', err);
        res.status(500).json({ error: 'Failed to create activity' });
      } else {
        res.json({ message: 'Activity created successfully', id: result.insertId });
      }
    });
  },

  updateActivity: (req, res) => {
    const activityId = req.params.id;
    const activityData = req.body;
    activityModel.updateActivity(activityId, activityData, (err) => {
      if (err) {
        console.error('Error updating activity:', err);
        res.status(500).json({ error: 'Failed to update activity' });
      } else {
        res.json({ message: 'Activity updated successfully' });
      }
    });
  },

  deleteActivity: (req, res) => {
    const activityId = req.params.id;
    activityModel.deleteActivity(activityId, (err) => {
      if (err) {
        console.error('Error deleting activity:', err);
        res.status(500).json({ error: 'Failed to delete activity' });
      } else {
        res.json({ message: 'Activity deleted successfully' });
      }
    });
  }
};

module.exports = activityController;
