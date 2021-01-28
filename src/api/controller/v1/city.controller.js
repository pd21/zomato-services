const zomatoService = require('../../services/zomato-services')

const data = async(req, res) => {
    try{
        const cityData = await zomatoService.getCityInfo(req.params.city)
        const locationSuggestions = cityData.location_suggestions[0]

        const listOfCuisines = await zomatoService.getListOfCuisines(locationSuggestions.id)
        const { cuisines } = listOfCuisines

        const listOfCollection = await zomatoService.getListOfCollections(locationSuggestions.id)
        const { collections } = listOfCollection

        res.send({ locationSuggestions, cuisines, collections  })
    }
    catch(error){
        res.send('error')
    }
}

module.exports = {
    data
}