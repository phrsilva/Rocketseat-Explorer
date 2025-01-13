const {Router} = require('express');
const userController = require('../controllers/UserControllers');
const garantirAutenticacao = require('../middleware/garantirAutenticacao');
const multer = require('multer');
const uploadConfig = require('../configs/upload');
const UserAvatarController = require('../controllers/UserAvatarController');

const upload = multer(uploadConfig.MULTER);

const userAvatarController = new UserAvatarController();
const userRoutes = Router();

userRoutes.post('/', userController.create)
userRoutes.get('/indexUsers', userController.index)
userRoutes.get('/showUser/:id', userController.show)
userRoutes.put('/', garantirAutenticacao, userController.update)
userRoutes.delete('/', garantirAutenticacao, userController.delete)
userRoutes.patch('/avatar', garantirAutenticacao,  upload.single('avatar'), userAvatarController.updateAvatar)


module.exports = userRoutes