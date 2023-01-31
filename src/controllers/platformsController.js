"use strict";
const { platformsModule } = require("../modules/platformsModule")

const platformsController = async (req, res) => {
  try {
    const platforms = await platformsModule();
		res.status(200).send(platforms);
  } catch (error) {
		res.status(500).send({error: error.message})
	}
};

module.exports = { platformsController };
