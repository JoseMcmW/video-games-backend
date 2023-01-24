const axios = require("axios")
require('dotenv').config();
const { API_KEY, BASE_URL } = process.env

const videogamesService = async () => {
  try {
    const url = `${BASE_URL}/games?key=${API_KEY}`
    const { data: videogames } = await axios.get(url);
    return videogames;
  } catch (error) {
    throw error;
  }
}

const detailGameService = async (id) => {
  try {
    const url = `${BASE_URL}/games/${id}?key=${API_KEY}`
    const detailGame = await axios.get(url);
    return detailGame.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { videogamesService, detailGameService }