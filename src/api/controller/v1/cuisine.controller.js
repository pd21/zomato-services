const zomatoService = require('../../services/zomato-services')

const data = async(req,res) => {
    try{
        const cuisineData = await zomatoService.getListOfRestaurantsForCuisine(req.params.city_id,req.params.cuisine_id)
        res.send({ cuisineData })
    }
    catch(error){
        res.send(error.message)
    }
}

module.exports = {
    data
}