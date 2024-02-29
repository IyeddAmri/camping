// photogallerymodel.js
const db = require('../database/index');
class PhotogalleryModel {
  // Create a new photo entry
  static createPhoto(imageUrl) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO photogallery (image_url) VALUES (?)', [imageUrl], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  // Get all photos
  static getAllPhotos() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM photogallery', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Get a photo by ID
  static getPhotoById(photoId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM photogallery WHERE id = ?', [photoId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  // Update a photo by ID
  static updatePhoto(photoId, imageUrl) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE photogallery SET image_url = ? WHERE id = ?', [imageUrl, photoId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows > 0);
        }
      });
    });
  }

  // Delete a photo by ID
  static deletePhoto(photoId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM photogallery WHERE id = ?', [photoId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows > 0);
        }
      });
    });
  }
}

module.exports = PhotogalleryModel;
