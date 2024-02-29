const connection = require('../database/index');

const activityModel = {
  getAllActivities: (callback) => {
    connection.query('SELECT * FROM activities', callback);
  },

  getActivityById: (activityId, callback) => {
    connection.query('SELECT * FROM activities WHERE ActivityID = ?', [activityId], callback);
  },

  createActivity: (activityData, callback) => {
    const { Name, Description, Difficulty, ImageURL, Category } = activityData;
    connection.query('INSERT INTO activities (Name, Description, Difficulty, ImageURL, Category) VALUES (?, ?, ?, ?, ?)',
      [Name, Description, Difficulty, ImageURL, Category], callback);
  },

  updateActivity: (activityId, activityData, callback) => {
    const { Name, Description, Difficulty, ImageURL, Category } = activityData;
    connection.query('UPDATE activities SET Name=?, Description=?, Difficulty=?, ImageURL=?, Category=? WHERE ActivityID=?',
      [Name, Description, Difficulty, ImageURL, Category, activityId], callback);
  },

  deleteActivity: (activityId, callback) => {
    connection.query('DELETE FROM activities WHERE ActivityID=?', [activityId], callback);
  }
};

module.exports = activityModel;
