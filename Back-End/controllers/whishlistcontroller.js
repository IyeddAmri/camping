const wishlistModel = require('../models/whishlistmodel');
const wishlistController = {
  addToWishlist: (req, res) => {
    const { userID, campsiteID } = req.body;
    wishlistModel.addToWishlist(userID, campsiteID, (err, wishlistID) => {
      if (err) {
        console.error('Error adding to wishlist:', err);
        res.status(500).json({ error: 'Failed to add to wishlist' });
      } else {
        res.json({ message: 'Added to wishlist successfully', id: wishlistID });
      }
    });
  },

  removeFromWishlist: (req, res) => {
    const wishlistID = req.params.id;
    wishlistModel.removeFromWishlist(wishlistID, (err) => {
      if (err) {
        console.error('Error removing from wishlist:', err);
        res.status(500).json({ error: 'Failed to remove from wishlist' });
      } else {
        res.json({ message: 'Removed from wishlist successfully' });
      }
    });
  },

  getWishlistByUserID: (req, res) => {
    const userID = req.params.id;
    wishlistModel.getWishlistByUserID(userID, (err, results) => {
      if (err) {
        console.error('Error fetching wishlist:', err);
        res.status(500).json({ error: 'Failed to fetch wishlist' });
      } else {
        res.json(results);
      }
    });
  },
  
  getWishlist: (req, res) => {
    wishlistModel.getWishlist((err, results) => {
      if (err) {
        console.error('Error fetching wishlist:', err);
        res.status(500).json({ error: 'Failed to fetch wishlist' });
      } else {
        res.status(200).json(results);
      }
    });
  }
};

module.exports = wishlistController;
