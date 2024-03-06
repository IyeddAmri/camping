const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/whishlistcontroller');

router.post('/', wishlistController.addToWishlist);
router.delete('/:id', wishlistController.removeFromWishlist);
router.get('/:id', wishlistController.getWishlistByUserID);
router.get('/getAll', wishlistController.getWishlist);



module.exports = router;
