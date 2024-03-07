const express = require('express');
const router = express.Router();
const campsitesController = require('../controllers/campsitesController');

router.get('/get', campsitesController.getAllCampsites);
router.get('/get/:id', campsitesController.getCampsiteById);
router.post('/add', campsitesController.createCampsite);
router.put('/like/:id', campsitesController.likeCampsite);  // New route for liking
router.put('/put/:id', campsitesController.updateCampsite);
router.delete('/:id', campsitesController.deleteCampsite);

module.exports = router;
