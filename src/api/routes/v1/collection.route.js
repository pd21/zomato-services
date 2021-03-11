const express = require('express');

const router = express.Router();
const collectionController = require('../../controller/v1/collection.controller')

router
    .route('/:city_id/:collection_id')
    /**
    * @api 
    * @apiDescription 
    * @apiVersion 
    * @apiName 
    * @apiGroup
    * @apiPermission 
    *
    * @apiHeader 
    *
    * @apiSuccess 
    *
    * @apiError
    * @apiError 
    */
    .get(collectionController.data)


module.exports = router;  