"use strict";
const { videogameModule, detailGameModule } = require("../modules/videogameModule")

const videogameController = async (req, res) => {
  try {
		const videogames = await videogameModule()
    res.status(200).send(videogames);
  } catch (error) {
		res.status(error.status || 500).send({ "error": error.message })
	}
};

const detailGameController = async (req, res) => {
  try {
    const { id } = req.params
    const detailgames = await detailgamesModule(id)
    res.status(200).send(detailgames)
  } catch (error) {
    res.status(error.status || 500).send({ "error": error.message })
  }
}

module.exports = { videogameController, detailgameController };
