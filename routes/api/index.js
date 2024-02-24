const router = require('express').Router();
const userRoutes = require('./thoughtRoutes');
const thoughtsRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes)

module.exports = router;
