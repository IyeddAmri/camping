const connection= require('../database/index'); // Import your database connection

const wishlistModel = {
  addToWishlist: (userID, campsiteID, callback) => {
    const query = 'INSERT INTO wishlist (UserID, CampsiteID) VALUES (?, ?)';
    connection.query(query, [userID, campsiteID], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result.insertId);
      }
    });
  },

  removeFromWishlist: (wishlistID, callback) => {
    const query = 'DELETE FROM wishlist WHERE WishListID = ?';
    connection.query(query, [wishlistID], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  getWishlistByUserID: (userID, callback) => {
    const query = 'SELECT * FROM wishlist WHERE WishListID= ?';
    connection.query(query, [userID], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  getWishliste: (callback) => {
    const query = 'SELECT * FROM wishlist'
    connection.query(query,(err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });

  }
};

module.exports = wishlistModel;
