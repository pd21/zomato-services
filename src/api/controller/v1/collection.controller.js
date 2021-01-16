const zomatoService = require('../../services/zomato-services')

const data = async(req,res) => {
    try {
        const collectionData = await zomatoService.getListOfRestaurantsForCollection(req.params.city_id,req.params.collection_id)
        res.send({ collectionData })
    }
    catch(error){
        res.send(error.message)
    }
}

module.exports = {
    data
}