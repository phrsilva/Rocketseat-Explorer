const {Router} = require('express');
const userController = require('../controllers/UserControllers');

const userRoutes = Router();

userRoutes.post('/new', userController.create)
userRoutes.get('/indexUsers', userController.index)
userRoutes.get('/showUser/:id', userController.show)
userRoutes.put('/updateUser/:id', userController.update)
userRoutes.delete('/deleteUser/:id', userController.delete)


module.exports = userRoutes