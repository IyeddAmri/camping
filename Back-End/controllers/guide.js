const guide= require('../models/guide')

const getAllGuide = (req, res) => {
    guide.getAll((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
  
  const getOneGuide = (req, res) => {
    const nameId = req.params.id;
    guide.getOne(nameId, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(result);
      }
    });
  }
  
  const createGuide = (req, res) => {
    guide.create(req.body, (err, result) => {
      if (err) {
        res.status(409).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  }
  
  const deleteGuide = (req, res) => {
    guide.remove(req.params.id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send();
      }
    });
  }
  
  const updateGuide = (req, res) => {
    guide.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (!result) {
        res.status(404).send("guide is not found");
      } else {
        res.status(200).send();
      }
    });
  }
  
  module.exports = {
    getAllGuide,
    getOneGuide,
    createGuide,
    deleteGuide,
    updateGuide,
  }
  
