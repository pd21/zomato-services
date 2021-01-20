const zomatoService = require('../../services/zomato-services')

const data = async(req,res) => {
    try{
        const restaurantData = await zomatoService.getRestaurantDetails(req.params.restaurant_id)
        res.send({ restaurantData })
    }
    catch( error ){
        res.send(error.message)
    }
}

module.exports = {
    data
}