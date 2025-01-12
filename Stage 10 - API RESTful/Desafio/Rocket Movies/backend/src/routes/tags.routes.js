const {Router} = require('express');

const tagController = require('../controllers/TagController');
const garantirAutenticacao = require('../middleware/garantirAutenticacao');

const tagRoutes = Router();

tagRoutes.use(garantirAutenticacao)

tagRoutes.get('/index', tagController.index)


module.exports = tagRoutes