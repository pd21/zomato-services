const express = require('express')

const router = express.Router()
const restaurantController = require('../../controller/v1/restaurant.controller')

router
    .route('/:restaurant_id')
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
    .get(restaurantController.data)

    module.exports = router