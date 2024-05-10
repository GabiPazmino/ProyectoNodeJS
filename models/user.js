// Importamos mongoose
const mongoose = require('mongoose');
const bcryptService = require('../services/bcryptService');

// Definimos el esquema

const userSchema = new mongoose .Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    }
}); 


// Antes de guardar un nuevo usuario vamos a hashar la contraseña
userSchema.pre('save', function(next) {
    if (!this.isModified('contraseña')) {
        return next();
    }
    bcryptService
        .hashPassword(this.contraseña)
        .then(hashedPassword => {
            this.contraseña = hashedPassword;
            next();
        })
        .catch(error => {
            console.error(error);
            next(error);
        });
});
 

// Crear el modelo user utilizando el esquema
const User = mongoose.model('User', userSchema);

// Exportar el modelo
module.exports = User;
