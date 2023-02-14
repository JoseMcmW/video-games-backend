const { Videogame } = require("../db");

const videogameHandler = async (game) => {
  try {
    return await Videogame.create(game);
  } catch (error) {
    throw error;
  }
};

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

const detailGameHandler = async (id) => {
  try {
    return await Videogame.findOne({ where: { id } });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  videogameHandler,
  detailGameHandler,
  deleteVideogameHandler
};