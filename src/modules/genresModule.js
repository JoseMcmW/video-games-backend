const { genresService } = require("../services/genresService")

const genresModule = async () => {
  try {
    const genres = await genresService();
    return genres;
  } catch (error) {
    throw error;
  }
}

module.exports = { genresModule };