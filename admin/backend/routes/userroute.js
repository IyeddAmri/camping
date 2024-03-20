const express = require('express');
const router = express.Router();
const userController = require('../controllers/Userscontroller');


router.get('/getall', userController.getAllusers);
router.get('/:id', userController.getuserById);
router.post('/add', userController.createuser);
router.put('/:id', userController.updateuser);
router.delete('/:id', userController.deleteuser);

module.exports = router;
