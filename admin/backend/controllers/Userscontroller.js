const userModel = require('../models/usermodel');

const userController = {
    getAllusers: (req, res) => {
        userModel.getAllusers((err, results) => {
            if (err) {
                console.error('Error retrieving users: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            res.status(200).json(results);
        });
    },

    getuserById: (req, res) => {
        const userId = req.params.id;
        userModel.getuserById(userId, (err, result) => {
            if (err) {
                console.error('Error retrieving user: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'user not found' });
                return;
            }
            res.status(200).json(result[0]);
        });
    },

    createuser: (req, res) => {
        const userData = req.body;
        userModel.createuser(userData, (err, result) => {
            if (err) {
                console.error('Error creating user: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            res.status(201).json({ message: 'user created successfully' });
        });
    },

    updateuser: (req, res) => {
        const userId = req.params.id;
        const userData = req.body;
        userModel.updateuser(userId, userData, (err, result) => {
            if (err) {
                console.error('Error updating user: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'user not found' });
                return;
            }
            res.status(200).json({ message: 'user updated successfully' });
        });
    },

    deleteuser: (req, res) => {
        const userId = req.params.id;
        userModel.deleteuser(userId, (err, result) => {
            if (err) {
                console.error('Error deleting user: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'user not found' });
                return;
            }
            res.status(200).json({ message: 'user deleted successfully' });
        });
    }
};

module.exports = userController;
