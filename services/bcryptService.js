const bcrypt = require('bcrypt');

// Función para hashear una contraseña
function hashPassword(plainPassword) {
    return new Promise((resolve, reject) => {
        const saltRounds = 10;
        bcrypt.hash(plainPassword, saltRounds, (error, hashedPassword) => {
            if (error) {
                PromiseRejectionEvent(new Error("Error al hashear la contraseña"));
            } else {
                resolve(hashedPassword);
            }
        })
    })
}

// funcion para comparar contraseñas con su contraseña encriptada

function comparePassword(plainPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hashedPassword, (error, match) => {
            if (error) {
                reject(new Error("Error al comparar la contraseña"));
            } else {
                resolve(match);
            }
        })
    })
}

module.exports = { hashPassword, comparePassword }