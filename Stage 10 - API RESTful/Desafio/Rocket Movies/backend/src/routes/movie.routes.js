const { Router } = require('express');
const movieController = require('../controllers/MovieControllers');
const garantirAutenticacao = require('../middleware/garantirAutenticacao');

const movieRoutes = Router();
movieRoutes.use(garantirAutenticacao)

movieRoutes.post('/create', movieController.create)
movieRoutes.get('/index', movieController.index)
movieRoutes.put('/update', movieController.update)
movieRoutes.get('/search/', movieController.show)
movieRoutes.delete('/delete/:id', movieController.delete)


module.exports = movieRoutes