const express = require("express");
const app = express();
const conectarDB = require('./utils/bd');

const dotenv = require('dotenv');
dotenv.config({path: './config/variables.env'});
const port = process.env.PORT_SERVER || 4500;

//llamar a la conexion
conectarDB()


const home = require('./routes/home');
const services = require('./routes/services');
const posts = require('./routes/posts');

// lectura / habilitar express.json => manda la peticion
app.use(express.json({extend: true}));

//Routes
app.use('/', home);
app.use('/services', services);
app.use('/', posts);
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(port, () => {
    console.log(`server escuchando en port: http://localhost:${port}`);
  });