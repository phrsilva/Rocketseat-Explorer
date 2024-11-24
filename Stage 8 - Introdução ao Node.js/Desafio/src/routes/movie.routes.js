const { Router } = require('express');
const movieController = require('../controllers/MovieControllers');

const movieRoutes = Router();

movieRoutes.post('/deixarAnalise', movieController.create)
movieRoutes.get('/index', movieController.index)
movieRoutes.get('/search', movieController.show)
movieRoutes.put('/updateMovie/:id', movieController.update)
movieRoutes.delete('/deleteMovie/:id', movieController.delete)


module.exports = movieRoutes