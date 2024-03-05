const connection = require("../database/index");

const campsitesModel = {
  getAllCampsites: (callback) => {
    connection.query('SELECT * FROM campsites', callback);
  },

  getCampsiteById: (campsiteId, callback) => {
    connection.query('SELECT * FROM campsites WHERE CampsiteID = ?', [campsiteId], callback);
  },

  createCampsite: (campsiteData, callback) => {
    connection.query('INSERT INTO campsites SET ?', campsiteData, callback);
  },

  updateCampsite: (campsiteId, campsiteData, callback) => {
    connection.query('UPDATE campsites SET ? WHERE CampsiteID = ?', [campsiteData, campsiteId], callback);
  },

  deleteCampsite: (campsiteId, callback) => {
    connection.query('DELETE FROM campsites WHERE CampsiteID = ?', [campsiteId], callback);
  }
};

module.exports = campsitesModel;
