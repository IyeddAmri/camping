const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/whishlistcontroller');

router.post('/add', wishlistController.addToWishlist);
router.delete('/:id', wishlistController.removeFromWishlist);
router.get('/:id', wishlistController.getWishlistByUserID);
router.get('/ok', wishlistController.getWishlist);



module.exports = router;
