const express = require('express');

const UserController = require('./controllers/UserController');
const UserReposController = require('./controllers/UserReposController');
const routes = express.Router();

//Single User
routes.get('/api/users/:username/details', UserController.show);

//User Repos
routes.get('/api/users/:username/repos', UserReposController.index);

//User Listing
routes.get('/api/users', UserController.index);

module.exports = routes;