// photogalleryroute.js
const express = require('express');
const router = express.Router();
const PhotogalleryController = require('../controllers/photogallery');

// Create a new photo
router.post('/add', PhotogalleryController.createPhoto);

// Get all photos
router.get('/get', PhotogalleryController.getAllPhotos);

// Get a photo by ID
router.get('/:id', PhotogalleryController.getPhotoById);

// Update a photo by ID
router.put('/:id', PhotogalleryController.updatePhoto);

// Delete a photo by ID
router.delete('/:id', PhotogalleryController.deletePhoto);

module.exports = router;
