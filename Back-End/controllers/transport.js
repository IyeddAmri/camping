const transport= require('../models/transport.js')

const getAllTransport = (req, res) => {
    transport.getAll((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
  
  const getOneTransport = (req, res) => {
    const nameId = req.params.id;
    transport.getOne(nameId, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(result);
      }
    });
  }
  
  const createTransport = (req, res) => {
    transport.create(req.body, (err, result) => {
      if (err) {
        res.status(409).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  }
  
  const deleteTransport = (req, res) => {
    transport.remove(req.params.id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send();
      }
    });
  }
  
  const updateTransport = (req, res) => {
    transport.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (!result) {
        res.status(404).send("transport is not found");
      } else {
        res.status(200).send();
      }
    });
  }
  
  module.exports = {
    getAllTransport,
    getOneTransport,
    createTransport,
    deleteTransport,
    updateTransport,
  }
  
