const express = require('express');
const wishController = require('../controllers/WishlistController');

const router = express.Router();

router.get('/get', wishController.getAll);
router.get('/:id', wishController.getWishById);
router.post('/add', wishController.createWish);
router.put('/:id', wishController.updateWish);
router.delete('/:id', wishController.deletewish);

module.exports = router;