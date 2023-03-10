const { Videogame } = require("../db");

const videogameHandler = async (game) => {
  try {
    return await Videogame.create(game);
  } catch (error) {
    throw error;
  }
};

const videogamesDB = async() => {
  try {
    return await Videogame.findAll();
  } catch (error) {
    throw error;
  }
}

const deleteVideogameHandler = async (id) => {
  try {
    return await Videogame.destroy({
      where: {
        id
      }
    });
  } catch (error) {
    throw error;
  }
}

const updateVideogameHandler = async (id, body) => {
  try {
    return await Videogame.update( body , {
      where: {
        id
      }
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  videogameHandler,
  updateVideogameHandler,
  deleteVideogameHandler,
  videogamesDB
};