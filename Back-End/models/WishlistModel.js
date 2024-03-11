const connection = require("../database/index");

module.exports = {
  delete: (id, callback) => {
    const sql = "DELETE FROM wishlist WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.affectedRows === 0) {
        callback({ status: 404, message: 'wish not found' }, null);
      } else {
        callback(null, results);
      }
    });
  },
  getAll: (callback) => {
    const query = "SELECT * FROM wishlist";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  create: (data, callback) => {
    const sql = 'INSERT INTO wishlist SET ?';
    connection.query(sql, data, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedData, callback) => {
    const sql = "UPDATE wishlist SET ? WHERE WishlistID=?";
    connection.query(sql, [updatedData, id], (err, results) => {
      if (err) {
        console.error('Error during update:', err);
      }
      console.log('SQL Query:', sql, [updatedData, id]);
      callback(err, results);
    });
  },

  getById: (id, callback) => {
    const query = "SELECT * FROM wishlist where WishlistID=?";
    connection.query(query, [id], (err, results) => {
      callback(err, results);
    });
  }
};
