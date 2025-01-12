const {Router} = require('express');
const userController = require('../controllers/UserControllers');
const garantirAutenticacao = require('../middleware/garantirAutenticacao');

const userRoutes = Router();

userRoutes.post('/', userController.create)
userRoutes.get('/indexUsers', userController.index)
userRoutes.get('/showUser/:id', userController.show)
userRoutes.put('/', garantirAutenticacao, userController.update)
userRoutes.delete('/', garantirAutenticacao, userController.delete)


module.exports = userRoutes