// importamos el modelo de  Mongo
const User = require('../models/user');
const bcryptService = require('../services/bcryptService');

// función para obtener todos los usuarios
function getAllUsers(req, res) {
    // Utilizamos el metodo 'find' para obtener todos los usuarios

    User.find()
        .then(users => {
            res.json(users); // Devolvemos los todos los usuarios
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al obtener los usuarios");
        });

}

// funcion para crear un nuevo usuario
function createUser(req, res) {
    // extraemos toda la informacion del body
    const { nombre, edad, email, contraseña } = req.body;

    // creamos un nuevo usuario
    User.create({nombre, edad, email, contraseña})
        .then((newUser) => {res.json(newUser); // Devolvemos el usuario creado en formato JSON
    }).catch((error) => {
        console.error(error);
        res.status(500).send("Error al crear el usuario");
    });
}

// funcion para actualizar un usuario
function updatedUser(req, res) {
    // Obtenemos el id del usuario a actualizar
    const userId = req.params.id;

    // Obtenemos los datos actualizados del body de la request
    const updatedUser = req.body;

    // Utilizamos el metodo 'findByIdAndUpdate' para buscar yactualizar el usuario por su id
    User.findByIdAndUpdate(userId, updatedUser, { new: true })
        .then((user) => {
            res.status(200).json(user); // Devolvemos el usuario actualizado en formato JSON
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al actualizar el usuario");
        });
}

// funcion para eliminar un usuario
function deleteUser(req, res) {
    // Obtenemos el id del usuario a eliminar
    const userId = req.params.id;

    // Utilizamos el metodo 'findByIdAndDelete' para buscar y eliminar el usuario por su id
    User.findByIdAndDelete(userId)
        .then(() => {
            res.status(204).send("Usuario eliminado"); // Devolvemos un mensaje de exito
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al eliminar el usuario");
        });
}

// exportamos las funciones
module.exports = {
    getAllUsers,
    createUser,
    updatedUser,
    deleteUser
}