// importamos express y creamos el router

const express = require('express');
const router = express.Router();

// Importamos el controlador de sessionroutes

const sessionController = require('../controllers/sessionController');
const verifyToken = require('../middlewares/verifyToken');

// Ruta protegida para obtener información del usuario que inició  la sesión

router.get('/currentUser', verifyToken, sessionController.getCurrentUser);

module.exports = router;