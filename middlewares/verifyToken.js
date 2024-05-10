const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    return new Promise((resolve, reject) => {
        const token = req.headers.authorization;
        
        if (!token) {
            reject({status: 401, message: 'Token de autentificacción no proporcionado'});
        }
    
        jwt.verify(token.split(" ")[1], "0ca498012c35983212c3a3ae542463de24876370c59f8cf466900762e9726e3d", (error, decodedToken) => {
            if (error) {
                reject({status: 401, message: 'Token de autentificación inválido'});
            } else {
                req.userId = decodedToken.userId; //Agregamos el ID del usuario decodificado para su posterior uso
                resolve();
            }
        })
    })
    .then(() => next()) // continua con el seguimiento del siguiente controlador
    .catch(error => 
        res.status(error.status || 500).json({message: error.message}))
}

module.exports = verifyToken
