const {Router} = require('express');


const userRoutes = require('./user.routes');
const movieRoutes = require('./movie.routes');
const tagRoutes = require('./tags.routes');
const sessionRoutes = require('./sessions.routes');

const router = Router();

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/tags', tagRoutes);
router.use('/sessions', sessionRoutes);

module.exports = router;