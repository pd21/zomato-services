const express = require('express');

const router = express.Router();

const cityController = require('../../controller/v1/city.controller')


router
    .route('/:city')
    /**
    * @api {get} api/v1/city Create Renewal Order
    * @apiDescription get the city-details,list of collections
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
    .get(cityController.data);


module.exports = router;    