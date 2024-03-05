const db = require('../database/index');

module.exports = {
  getAll(callback) {
    const query = "SELECT * FROM photogallery";
    db.query(query, (err, results) => {
      callback(err, results);
    });
  },

  add(data, callback) {
    const sql = 'INSERT INTO photogallery SET ?';
    db.query(sql, data, (err, results) => {
      callback(err, results);
    });
  },

  getById(id, callback) {
    const query = "SELECT * FROM photogallery where id=?";
    db.query(query, [id], (err, results) => {
      callback(err, results);
    });
  }
}

