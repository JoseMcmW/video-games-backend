const { Router } = require("express");
const {
  videogamesController,
  detailGameController,
  saveVideogameController,
  deleteVideogameController,
  updateVideogameController,
} = require("../controllers/videogamesController");
const { platformsController } = require("../controllers/platformsController");
const {
  genresController,
  detailsGenreController,
} = require("../controllers/genresController");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.get('/auth', authRouter);

router.get("/videogames", videogamesController);
router.get("/detail-game/:id", detailGameController);
router.get("/genres", genresController);
router.get("/platforms", platformsController);
router.get("/details-genre/:id", detailsGenreController);
router.post("/save-videogame", saveVideogameController);
router.delete("/delete-videogame/:id", deleteVideogameController);
router.put("/update-videogame/:id", updateVideogameController);

module.exports = router;
