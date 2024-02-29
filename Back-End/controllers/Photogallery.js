const PhotogalleryModel = require('../models/photogallerymodel');

class PhotogalleryController {
  static async createPhoto(req, res) {
    const { image_url } = req.body;

    try {
      const newPhotoId = await PhotogalleryModel.createPhoto(image_url);
      res.json({ id: newPhotoId, message: 'Photo created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getAllPhotos(req, res) {
    try {
      const photos = await PhotogalleryModel.getAllPhotos();
      res.json(photos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  static async getPhotoById(req, res) {
    const { id } = req.params;

    try {
      const photo = await PhotogalleryModel.getPhotoById(id);
      if (photo) {
        res.json(photo);
      } else {
        res.status(404).json({ message: 'Photo not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updatePhoto(req, res) {
    const { id } = req.params;
    const { image_url } = req.body;

    try {
      const success = await PhotogalleryModel.updatePhoto(id, image_url);
      if (success) {
        res.json({ message: 'Photo updated successfully' });
      } else {
        res.status(404).json({ message: 'Photo not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async deletePhoto(req, res) {
    const { id } = req.params;

    try {
      const success = await PhotogalleryModel.deletePhoto(id);
      if (success) {
        res.json({ message: 'Photo deleted successfully' });
      } else {
        res.status(404).json({ message: 'Photo not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = PhotogalleryController;
