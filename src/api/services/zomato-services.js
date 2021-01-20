const axios = require('axios')
const API_KEY = 'bf559be38be02fe5af32e98737493766'

const getCityInfo = async(city) => {
    const options = {
        url: `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
        method: 'GET',
        headers: {
            'user-key': API_KEY
        }
    };
    const { data: response } = await axios(options);
    return response;
}

const getListOfCollections = async(city_id) => {
    const options = {
        url: `https://developers.zomato.com/api/v2.1/collections?city_id=${city_id}`,
        method: 'GET',
        headers: {
            'user-key': API_KEY
        }
    };
    const { data: response } = await axios(options)
    return response
}

const getListOfCuisines = async(city_id) => {
    const options = {
        url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=${city_id}`,
        method: 'GET',
        headers: {
            'user-key': API_KEY
        }
    };
    const { data: response } = await axios(options)
    return response
}

const getListOfRestaurantsForCollection = async (city_id, collection_id) => {
    const options = {
        url: `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city&collection_id=${collection_id}`,
        method: 'GET',
        headers: {
            'user-key': API_KEY
        }
    };
    const { data: response } = await axios(options)
    return response
}

const getRestaurantDetails = async (restaurant_id) => {
    const options = {
        url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurant_id}`,
        method: 'GET',
        headers: {
            'user-key': API_KEY
        }
    };

    const { data : response } = await axios(options)
    return response
}

const getReviews = async(restaurant_id) => {
    const options = {
        url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${restaurant_id}&count=10`,
        method: 'GET',
        headers: {
            'user-key': API_KEY
        }
    };

    const { data: response } = await axios(options)
    return response
}

module.exports = {
    getCityInfo,
    getListOfCollections,
    getListOfCuisines,
    getListOfRestaurantsForCollection,
    getRestaurantDetails,
    getReviews,
}