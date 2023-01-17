const videogameService = require("../services/videogameService");

const videogameModule = async () => {
  try {
    console.log("LLEGUÉ AL MODULE");
    const videogames = await videogameService()
    return videogames;
  } catch (error) {
    throw error;
  }
}

module.exports = videogameModule