const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: '.config/variables,env'});
const port = process.env.PORT_SERVER || 4500;


const home = require('./routes/home');
const services = require('./routes/services');
const posts = require('./routes/posts');

app.use('/', home);
app.use('/services', services);
app.use('/', posts);

app.listen(port, () => {
    console.log(`server escuchando en port: http://localhost:${port}`);
  });