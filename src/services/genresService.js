const axios = require("axios");
require("dotenv").config();
const { API_KEY, BASE_URL } = process.env;

const genresService = async () => {
  try {
    const url = `${BASE_URL}/genres?key=${API_KEY}`;
    const { data: genres } = await axios.get(url);
    return genres.results;
  } catch (error) {
    throw error;
  }
};

const detailsGenreService = async (id) => {
  try {
    const url = `${BASE_URL}/genres/${id}?key=${API_KEY}`;
    const genresDetailGames = await axios.get(url);
    return genresDetailGames.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { genresService, detailsGenreService };
