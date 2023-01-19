const { Router } = require('express');
const { videogameController, detailgameController } = require("../controllers/videogameController")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.get('/auth', authRouter);

router.get("/videogames", videogameController)
router.get("/detailgames/:id", detailgameController)


module.exports = router;
