const express = require('express');
const app = express();
const cors = require('cors');
const { getUsers, adduser, updateUser, deleteUser } = require('./controller');
const router = require('./router');

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Routes
app.get('/users', getUsers);
app.post('/createusers', adduser);
app.post('/updateusers', updateUser);
app.post('/deleteusers', deleteUser);

module.exports = app;

app.use('/api', router);