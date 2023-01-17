"use strict";
const videogameModule = require("../modules/videogameModule")

const videogameController = async (req, res) => {
  try {
		const videogames = await videogameModule()
    res.status(200).send(videogames);
  } catch (error) {
		res.status(error.status || 500).send({ "error": error.message })
	}
};

module.exports = videogameController;
