const express = require('express');

const router = express.Router();
const searchController = require('../../controller/v1/search.controller')

router
    .route('/:city_id/:search_term')
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
    .get(searchController.data)


module.exports = router;  