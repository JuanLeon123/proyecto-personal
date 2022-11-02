const express = require('express');
const conectarDB = require('./config/db');
const app = express();
conectarDB();
app.use('api/usuarios', require('./routes/usuario'));
app.listen(4000, () => {
    console.log("El servidor esta arriba")
})