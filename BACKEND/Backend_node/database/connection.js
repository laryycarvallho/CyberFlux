const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'workshop2026',
    database: 'cyberflux',
    port: 5432,
});

module.exports = pool;
