const { Router } = require('express');

const NotesController = require('../controllers/NotesController');
const AppError = require('../utils/AppError');

const notesRoutes = Router();


const notesController = new newController();


notesRoutes.post('/:user_id',  notesController.create);



module.exports = notesRoutes;

