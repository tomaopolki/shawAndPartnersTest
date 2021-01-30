const express = require('express');

const UserController = require('./Controllers/UserController');
const UserReposController = require('./Controllers/UserReposController');
const routes = express.Router();

//Single User
routes.get('/api/users/:username/details', UserController.show);

//User Repos
routes.get('/api/users/:username/repos', UserReposController.index);

//User Listing
routes.get('/api/users', UserController.index);

module.exports = routes;