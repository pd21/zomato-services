const express = require('express');

const router = express.Router();

const cityDetailController = require('../../controller/v1/cityDetail.controller')


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
    .get(cityDetailController.data);


module.exports = router;    