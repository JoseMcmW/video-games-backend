const { videogameService, detailGameService } = require("../services/videogameService");

const videogameModule = async () => {
  try {
    const videogames = await videogameService()
    return videogames;
  } catch (error) {
    throw error;
  }
}

const detailGameModule = async (id) => {
  try {
    const detailGame = await detailGameService(id)
    return detailGame;
  } catch (error) {
    throw error;
  }
}

module.exports = { videogameModule, detailGameModule }