const { Videogame } = require("../db");

const videogameHandler = async (game) => {
  try {
    return await Videogame.create(game);
  } catch (error) {
    throw error;
  }
};

module.exports = { videogameHandler };
