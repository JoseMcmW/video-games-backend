const { Router } = require('express');
const { videogameController, detailGameController } = require("../controllers/videogameController")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.get('/auth', authRouter);

router.get("/videogames", videogameController)
router.get("/detail-game/:id", detailGameController)


module.exports = router;
