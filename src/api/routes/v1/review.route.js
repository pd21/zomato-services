const express = require('express')

const router = express.Router()
const reviewController = require('../../controller/v1/review.controller')

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
   .get(reviewController.data)

module.exports = router;   