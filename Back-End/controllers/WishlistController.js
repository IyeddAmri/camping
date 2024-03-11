
const wish = require('../models/WishlistModel');

const wishlistController = {
  likeCampsite: (req, res) => {
    const campsiteId = req.params.id;

    wish.getById(campsiteId, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'Campsite not found' });
      } else {
        const updatedLikedValue = !result.Liked;

        wish.update(campsiteId, { Liked: updatedLikedValue }, (updateErr, updateResult) => {
          if (updateErr) {
            res.status(500).json({ message: 'Internal server error during like update' });
          } else {
            res.status(200).json({ message: 'Campsite like status updated successfully' });
          }
        });
      }
    });
  },
  getAll: (req, res) => {
    wish.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },
  
  getById: (req, res) => {
    const campsiteId = req.params.id;

    wish.getById(campsiteId, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'Campsite not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  createWish: (req, res) => {
    const wishData = req.body;
    wish.create(wishData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'wish created successfully' });
      }
    });
  },
  
  
  deletewish: (req, res) => {
    const id = req.params.id;
    wish.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'wish not found' });
      } else {
        res.status(200).json({ message: 'wish deleted successfully' });
      }
    });
  }
};

module.exports =wishlistController