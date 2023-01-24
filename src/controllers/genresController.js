"use strict";
const { genresModule } = require("../modules/genresModule")

const genresController = async (req, res) => {
  try {
    const genres = await genresModule();
    res.status(200).send(genres);
  } catch (error) {
    res.status(error.status || 500).send({ "error" : error.message} );
  }
}

module.exports = { genresController }