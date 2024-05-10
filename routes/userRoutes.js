// Importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos el controlador
const userController = require('../controllers/userController');

// definimos las rutas
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updatedUser);
router.delete('/:id', userController.deleteUser);

// exportamos el router
module.exports = router;