const express = require('express')

const router = express.Router()
const cuisineController = require('../../controller/v1/cuisine.controller')

router
    .route('/:city_id/:cuisine_id')
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
  .get(cuisineController.data)

module.exports = router  