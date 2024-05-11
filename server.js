'use strict';

// Importamos express, conexión a la base de datos
const express = require("express");
const connectDb = require("./db/db");

// Importamos las rutas
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");

// // importamos bodyParser
const bodyParser = require("body-parser");



// Instanciamos express y puerto
const app = express();
const port = 3010;


// Middlewares
app.use(express.json());
// // Instanciamos bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
    parameterLimit: '100000',
    limit: '50mb',
    extended: false
}));


// Rutas de autenticación
app.use("/api/auth", authRoutes);


// Rutas de usuario
app.use("/api/users", userRoutes);


// rutas de usuario actual
app.use("/api/session", sessionRoutes);

// Iniciamos la base de datos
connectDb();

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})