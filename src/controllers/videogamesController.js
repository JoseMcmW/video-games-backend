"use strict";
const {
  videogamesModule,
  detailGameModule,
  saveVideogameModule,
} = require("../modules/videogamesModule");

const videogamesController = async (req, res) => {
  try {
    const videogames = await videogamesModule();
    res.status(200).send(videogames);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const detailGameController = async (req, res) => {
  try {
    const { id } = req.params;
    const detailGame = await detailGameModule(id);
    res.status(200).send(detailGame);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const saveVideogameController = async (req, res) => {
  try {
    const { body } = req;
    await saveVideogameModule(body);
    res.status(200).send({ message: "Videogame saved success." });
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

module.exports = {
  videogamesController,
  detailGameController,
  saveVideogameController,
};
