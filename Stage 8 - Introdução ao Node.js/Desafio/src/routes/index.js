const {Router} = require('express');


const userRoutes = require('./user.routes');
const movieRoutes = require('./movie.routes');

const router = Router();

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

module.exports = router;