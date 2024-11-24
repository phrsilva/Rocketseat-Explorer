const {Router} = require('express');
const userController = require('../controllers/UserControllers');

const userRoutes = Router();

userRoutes.post('/users', userController.create)

module.exports = userRoutes