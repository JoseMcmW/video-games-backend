const { Router } = require('express');
const videogameController = require("../controllers/videogameController")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.get('/auth', authRouter);

router.get("/videogames", videogameController)


module.exports = router;
