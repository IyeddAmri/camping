models/event.js

const db = require('../database/index');

const event = {
  getAll: (callback) => {
    db.query('SELECT * FROM events', callback);
  },
  
  getById: (id, callback) => {
    db.query('SELECT * FROM events WHERE id = ?', [id], callback);
  },
  
  create: (eventData, callback) => {
    db.query('INSERT INTO events SET ?', eventData, callback);
  },
  
  update: (id, eventData, callback) => {
    db.query('UPDATE events SET ? WHERE id = ?', [eventData, id], callback);
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM events WHERE id = ?', [id], callback);
  }
};

module.exports = event;
