const resource= require('../models/resources.js')

const getAllResource = (req, res) => {
    resource.getAll((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
  
  const getOneResource = (req, res) => {
    const nameId = req.params.id;
    resource.getOne(nameId, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(result);
      }
    });
  }
  
  const createResource = (req, res) => {
    resource.create(req.body, (err, result) => {
      if (err) {
        res.status(409).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  }
  
  const deleteResource = (req, res) => {
    resource.remove(req.params.id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send();
      }
    });
  }
  
  const updateResource = (req, res) => {
    resource.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (!result) {
        res.status(404).send("resource is not found");
      } else {
        res.status(200).send();
      }
    });
  }
  
  module.exports = {
    getAllResource,
    getOneResource,
    createResource,
    deleteResource,
    updateResource,
  }
  
