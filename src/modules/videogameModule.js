const { videogameService, detailgameService } = require("../services/videogameService");

const videogameModule = async () => {
  try {
    const videogames = await videogameService()
    return videogames;
  } catch (error) {
    throw error;
  }
}

const detailgamesModule = async (id) => {
  try {
    const detailgames = await detailgameService(id)
    return detailgames;
  } catch (error) {
    throw error;
  }
}

module.exports = { videogameModule, detailgamesModule }