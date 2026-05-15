const express = require('express');
const router = express.Router();
const userController = require('./controller');

router.get('/users', userController.getUsers);
router.post('/createusers', userController.adduser);
router.get('/updateusers/:id', userController.updateUser);
router.delete('/deleteusers/:id', userController.deleteUser);

module.exports = router;