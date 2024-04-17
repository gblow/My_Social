const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
router.use('/thought',thoughtRoutes);
router.use('/user',userRoutes);



// Export the router
module.exports = router;