"use strict"

const axios = require("axios")
require('dotenv').config();
const { API_KEY, BASE_URL } = process.env;


const platformsService = async () => {
	try {
		const { data: platforms } = await axios.get(`${BASE_URL}/platforms?key=${API_KEY}`)
		return platforms.results;
	} catch (error) {
		throw error;
	}

}

module.exports = {
    platformsService
}