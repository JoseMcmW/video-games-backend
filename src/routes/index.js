const { Router } = require('express');
const { videogamesController, detailGameController } = require("../controllers/videogamesController");
const { platformsController } = require("../controllers/platformsController");
const { genresController, detailsGenreController } = require("../controllers/genresController");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.get('/auth', authRouter);

router.get("/videogames", videogamesController);
router.get("/detail-game/:id", detailGameController);
router.get("/genres", genresController);
router.get("/platforms", platformsController);
router.get("/details-genre/:id", detailsGenreController)


module.exports = router;
