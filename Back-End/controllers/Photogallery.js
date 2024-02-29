const Photo = require('../models/photogallerymodel');

const PhotogalleryController = {
  getAllPhoto: (req, res) => {
    Photo.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },
  
  getPhotoById: (req, res) => {
    const id = req.params.id;
    Photo.getById(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'Photo not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },
  
  createPhoto: (req, res) => {
    const PhotoData = req.body;
    Photo.add(PhotoData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Photo created successfully' });
      }
    });
  },
};

module.exports = PhotogalleryController;
