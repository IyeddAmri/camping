const connection = require("../database/index");

module.exports = {
  deleteCampsite: (id, callback) => {
    const sql = "DELETE FROM campsites WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.affectedRows === 0) {
        callback({ status: 404, message: 'Event not found' }, null);
      } else {
        callback(null, results);
      }
    });
  },
  getAllCampsites: (callback) => {
    const query = "SELECT * FROM campsites";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  createCampsite: (data, callback) => {
    const sql = 'INSERT INTO campsites SET ?';
    connection.query(sql, data, (err, results) => {
      callback(err, results);
    });
  },
  updateCampsite: (id, updatedData, callback) => {
    const sql = "UPDATE campsites SET ? WHERE id=?";
    connection.query(sql, [updatedData, id], (err, results) => {
      if (err) {
        console.error('Error during update:', err);
      }
      console.log('SQL Query:', sql, [updatedData, id]);
      callback(err, results);
    });
  },

  getCampsiteById: (id, callback) => {
    const query = "SELECT * FROM campsites where id=?";
    connection.query(query, [id], (err, results) => {
      callback(err, results);
    });
  }
};
