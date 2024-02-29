const express = require('express');
const router = express.Router();
const campsitesController = require('../controllers/campsitesController');

router.get('/', campsitesController.getAllCampsites);
router.get('/:id', campsitesController.getCampsiteById);
router.post('/', campsitesController.createCampsite);
router.put('/:id', campsitesController.updateCampsite);
router.delete('/:id', campsitesController.deleteCampsite);

module.exports = router;
