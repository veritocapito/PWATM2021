const knex = require('knex')({
    client: 'mysql'|| process.env.DB_CLIENT,
    connection: {
        host: 'localhost' || process.env.DB_HOST,
        user: 'root' || process.env.DB_USER,
        password: '8639' || process.env.DB_PASSWORD,
        database: 'PWA-2021-2CM' || process.env.DB_NAME,
        pool: {min:1, max:10}
    }
});

module.exports = knex;