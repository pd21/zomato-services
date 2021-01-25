const zomatoService = require('../../services/zomato-services')

const data = async(req,res) => {
    try{
        const searchData = await zomatoService.getSearchData(req.params.city_id, req.params.search_term)
        res.send({ searchData })
    }
    catch(error){
        res.send( error.message )
    }
}

module.exports = {
    data
}