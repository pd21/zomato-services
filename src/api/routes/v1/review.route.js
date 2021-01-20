const express = require('express')

const router = express.Router()
const reviewController = require('../../controller/v1/review.controller')

router
    .route('/:restaurant_id')
    /**
    * @api {get} /api/v1/city/collection Get Restaurants based on collection-type
    * @apiDescription get Restaurants based on collection-type
    * @apiVersion 1.0.0
    * @apiName data
    * @apiGroup
    * @apiPermission customer
    *
    * @apiHeader {String} Authorization  User's access token
    *
    * @apiSuccess {Object} RenewalOrder
    *
    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
    * @apiError (Forbidden 403)     Forbidden     Only customer can access the data
    */
   .get(reviewController.data)

module.exports = router;   