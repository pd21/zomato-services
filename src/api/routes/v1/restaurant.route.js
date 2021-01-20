const express = require('express')

const router = express.Router()
const restaurantController = require('../../controller/v1/restaurant.controller')

router
    .route('/:restaurant_id')
    /**
    * @api {get} /api/v1/city/restaurant Get restaurant details
    * @apiDescription get restaurants details
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
    .get(restaurantController.data)

    module.exports = router