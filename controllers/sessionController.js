const User = require('../models/user');


// Controlador para obtener información del usario que inicia sesion

function getCurrentUser(req, res) {
    new Promise((resolve, reject) => {
        
        // El middleware de autenticación (verifyToken) ya almacenó la información del usuario en req.userId
        const userId = req.userId;

        // BUsca el usuario en la base de datos utilizando su ID
        User.findById(userId)
        .then((user) => {
            // Si no se encuentra el usuario, se resuelve con un error
            if (!user) {
                reject({status: 404, message:'Usuario no encontrado'});
            } else {
                resolve(user);
            }
        })
        .catch((error) => reject({status: 500, message: "Error al buscar el usuario", error}));     
    })
    .then((user) => res.json(user))
    .catch((error) => {
        console.error(error);
        res.status(error.status || 500).json({message: error.message})
    });
}


module.exports = {
    getCurrentUser
};