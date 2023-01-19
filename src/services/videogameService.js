const axios = require("axios")
require('dotenv').config();
const { API_KEY } = process.env

const videogameService = async () => {
  try {
    const url = `https://api.rawg.io/api/games?key=${API_KEY}`
    const { data: videogames } = await axios.get(url);
    return videogames;
  } catch (error) {
    throw error;
  }
}

const detailgameService = async (id) => {
  try {
    const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    const detailgames = await axios.get(url);
    return detailgames.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { videogameService, detailgameService }