"use strict";
const {
  videogamesModule,
  detailGameModule,
  saveVideogameModule,
  deleteVideogameModule,
  updateVideogameModule
} = require("../modules/videogamesModule");

const videogamesController = async (req, res) => {
  const { name } = req.query;
  try {
    const videogames = await videogamesModule(name);
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
    res.status(200).send({ message: "Videogame saved successfully." });
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const deleteVideogameController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteVideogameModule(id);
    res.status(200).send({ message: "Videogame deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateVideogameController = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const videogameUpdated = await updateVideogameModule(id, body)
    res.status(201).send({message: "Videogame updated successfully"});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  videogamesController,
  detailGameController,
  saveVideogameController,
  deleteVideogameController,
  updateVideogameController
};
