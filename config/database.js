const { createPool } = require('mysql');

const pool = createPool({

    port:process.env.APP_PORT,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    database:process.env.MYSQL_DB,
    connectionLimit:10

});

module.exports = pool;