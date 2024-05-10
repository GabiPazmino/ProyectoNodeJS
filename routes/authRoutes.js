// importamos express y creamos el router

const express = require('express');
const router = express.Router();

// Importamos el controlador de authRoutes

const authController = require('../controllers/authController');

// Importamos el middlerware de seguridad
const verifyToken = require('../middlewares/verifyToken');

// Ruta para el auth del user
router.post('/login', authController.login);

// ruta para cerrar sesion
router.post('/logout', verifyToken, authController.logout);

module.exports = router;

