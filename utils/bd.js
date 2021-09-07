// const knex = require('knex')({
//     client: 'mysql'|| process.env.DB_CLIENT,
//     connection: {
//         host: 'localhost' || process.env.DB_HOST,
//         user: 'root' || process.env.DB_USER,
//         password: '8639' || process.env.DB_PASSWORD,
//         database: 'PWA-2021-2CM' || process.env.DB_NAME,
//         pool: {min:1, max:10}
//     }
// });

// module.exports = knex;

const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.STRING_SERVER_MONGO, {})
        console.log('Conectado a Mongo');
    } catch (error) {
        console.error(error);
        process.exit(1); //detiene la app
    }
}

module.exports = conectarDB;