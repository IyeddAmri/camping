// photogalleryroute.js
const express = require('express');
const router = express.Router();
const PhotogalleryController = require('../controllers/photogallery');

// Create a new photo
router.post('/add', PhotogalleryController.createPhoto);

// Get all photos
router.get('/get', PhotogalleryController.getAllPhoto);

// Get a photo by ID
router.get('/get/:id', PhotogalleryController.getPhotoById);


module.exports = router;
