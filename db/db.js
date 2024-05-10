// Importamos mongoose pARA la base de datos
const mongoose = require("mongoose");

// Conectamos a la base de datos
const mongoURL = "mongodb+srv://mgpa6:gabi1234@cluster0.zuoabqg.mongodb.net/";

// funcion para Conectamos a la base de datos
function connectDB() {
    return new Promise((res, rej) => {
        // Conectamos a la base de datos usando la URL
        mongoose.connect(mongoURL)
        .then(() => {
            console.log("Conección establecida");
            // si la conexión es correcta resolvemos la promesa
            res();
        })
        .catch((err) => {
            // si la conexión falla rechazamos la promesa e imprime error
            console.error("Error al conectar a la DB", err);
            rej(err);
        });
    });
}

// Exportamos la funcion
module.exports = connectDB;