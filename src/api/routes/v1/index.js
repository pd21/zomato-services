const express = require('express');
const cityRoutes = require('./city.route')
const collectionRoutes = require('./collection.route')
const restaurantRoutes = require('./restaurant.route')
const reviewRoutes = require('./review.route')
const cuisineRoutes =  require('./cuisine.route')
const searchRoutes = require('./search.route')
const cityDetailsRoutes = require('./cityDetail.route')

const router = express.Router();

router.use('/api/v1/city', cityRoutes);
router.use('/api/v1/city/collection', collectionRoutes)
router.use('/api/v1/city/restaurant', restaurantRoutes)
router.use('/api/v1/city/review', reviewRoutes)
router.use('/api/v1/city/cuisine', cuisineRoutes)
router.use('/api/v1/city/search', searchRoutes)
router.use('/api/v1/city/id', cityDetailsRoutes)

module.exports = router;