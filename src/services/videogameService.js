const axios = require("axios")

const videogameService = async () => {
  try {
    const url = "https://api.rawg.io/api/games?key=[AGREGAR KEY PERSONAL]"
    const { data: videogames } = await axios.get(url);
    return videogames;
  } catch (error) {
    throw error;
  }
}

module.exports = videogameService