const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');

router.get('./users',commentController.getusers);
router.post('/createusers', userController.addUser);
router.get('/updateusers/:id', userController.getUserById);

router.delete('/deleteusers/:id', userController.deleteUser);

module.exports = router;