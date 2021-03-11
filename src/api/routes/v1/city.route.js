const express = require('express');

const router = express.Router();

const cityController = require('../../controller/v1/city.controller')


router
    .route('/:city')
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
    .get(cityController.data);


module.exports = router;    