const zomatoService = require('../../services/zomato-services')

const data = async(req, res) => {
    try{
        const cityData = await zomatoService.getCityInfo(req.params.city)
        const locationSuggestions = cityData.location_suggestions[0]

        const listOfCollection = await zomatoService.getListOfCollections(locationSuggestions.id)
        const { collections } = listOfCollection

        res.send([{ locationSuggestions }, { collections }])
    }
    catch(error){
        res.send(error.message)
    }
}

module.exports = {
    data
}