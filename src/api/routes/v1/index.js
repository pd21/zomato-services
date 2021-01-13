const express = require('express');
const cityRoutes = require('./city.route')
const collectionRoute = require('./collection.route')

const router = express.Router();

router.use('/api/v1/city', cityRoutes);

module.exports = router;