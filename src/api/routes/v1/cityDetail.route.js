const express = require('express');

const router = express.Router();

const cityDetailController = require('../../controller/v1/cityDetail.controller')


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
    .get(cityDetailController.data);


module.exports = router;