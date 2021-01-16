const express = require('express');
const cityRoutes = require('./city.route')
const collectionRoutes = require('./collection.route')

const router = express.Router();

router.use('/api/v1/city', cityRoutes);
router.use('/api/v1/city/collection', collectionRoutes)

module.exports = router;