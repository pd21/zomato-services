const zomatoService = require('../../services/zomato-services')

const data = async (req, res) => {
    try {
        const reviewData = await zomatoService.getReviews(req.params.restaurant_id)
        res.send({ reviewData })
    }
    catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    data
}