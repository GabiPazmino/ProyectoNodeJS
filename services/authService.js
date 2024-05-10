const jwt = require('jsonwebtoken');

// Almacenar la clave secreta

const JWT_SECRET = "0ca498012c35983212c3a3ae542463de24876370c59f8cf466900762e9726e3d";

// Creamos una funcion para generar el token JWT

function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email       
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
}


module.exports = { generateToken }