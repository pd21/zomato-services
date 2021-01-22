const express = require('express');
const cityRoutes = require('./city.route')
const collectionRoutes = require('./collection.route')
const restaurantRoutes = require('./restaurant.route')
const reviewRoutes = require('./review.route')
const cuisineRoutes =  require('./cuisine.route')

const router = express.Router();

router.use('/api/v1/city', cityRoutes);
router.use('/api/v1/city/collection', collectionRoutes)
router.use('/api/v1/city/restaurant', restaurantRoutes)
router.use('/api/v1/city/review', reviewRoutes)
router.use('/api/v1/city/cuisine', cuisineRoutes)

module.exports = router;