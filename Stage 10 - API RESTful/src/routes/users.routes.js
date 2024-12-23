const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');

const UsersController = require('../controllers/UsersController');
const AppError = require('../utils/AppError');

const usersRoutes = Router();


const usersController = new UsersController();


usersRoutes.post('/',  usersController.create);
usersRoutes.put('/:id', ensureAuth, usersController.update);


module.exports = usersRoutes;

