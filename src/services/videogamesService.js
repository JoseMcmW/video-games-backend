const axios = require("axios");
require("dotenv").config();
const { API_KEY, BASE_URL } = process.env;

const videogamesService = async () => {
  try {
    let videogamesArray = [];
    let url = `${BASE_URL}/games?key=${API_KEY}`;
    for (let i = 1; i <= 8; i++) {
      const { data: videogames } = await axios.get(url);
      videogamesArray = [...videogamesArray, ...videogames.results];
      url = videogames.next;
    }
    return videogamesArray;
  } catch (error) {
    throw error;
  }
};

const detailGameService = async (id) => {
  try {
    const url = `${BASE_URL}/games/${id}?key=${API_KEY}`;
    const detailGame = await axios.get(url);
    return detailGame.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { videogamesService, detailGameService };
