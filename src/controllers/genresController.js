"use strict";

const { genresModule, detailsGenreModule } = require("../modules/genresModule");

const genresController = async (req, res) => {
  try {
    const genres = await genresModule();
    res.status(200).send(genres);
  } catch (error) {
    res.status(error.status || 500).send({ "error": error.message });
  }
};

const detailsGenreController = async (req, res) => {
  try {
    const { id } = req.params;
    const detailsGenre = await detailsGenreModule(id);
    res.status(200).send(detailsGenre);
  } catch (error) {
    res.status(error.ststaus || 500).send({ "error": error.message });
  }
};

module.exports = { genresController, detailsGenreController };
