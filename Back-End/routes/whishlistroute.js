const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/whishlistcontroller');

// Add to wishlist
router.post('/', wishlistController.addToWishlist);

// Remove from wishlist
router.delete('/:id', wishlistController.removeFromWishlist);

// Get wishlist by user ID
router.get('/:id', wishlistController.getWishlistByUserID);
router.get('/get', wishlistController.getWishlist);



module.exports = router;
