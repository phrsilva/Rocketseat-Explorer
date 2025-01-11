const {Router} = require('express');

const tagController = require('../controllers/TagController');

const tagRoutes = Router();

tagRoutes.get('/index', tagController.index)
tagRoutes.post('/new', tagController.create)
tagRoutes.put('/update/:id', tagController.update)
tagRoutes.delete('/delete/:id', tagController.delete)

module.exports = tagRoutes