const express = require('express');
const wishController = require('../controllers/WishlistController');

const router = express.Router();

router.get('/get', wishController.getAll);
router.get('/:id', wishController.getById);
router.post('/add', wishController.createWish);
router.put('/like/:id', wishController.likeCampsite); 
router.put('/:id', wishController.updateById);
router.delete('/:id', wishController.deletewish);

module.exports = router;
