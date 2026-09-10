// Importa o cliente do PostgreSQL
const { Client } = require('pg');


const client = new Client({
    host: 'localhost',       
    port: 5432,              
    user: 'postgres',       
    password: 'workshop2026',        
    database: 'cyberflux'   
});

// Conecta ao banco
client.connect()
    .then(() => console.log('📡 Conectado ao PostgreSQL!'))
    .catch(err => console.error('❌ Erro ao conectar ao PostgreSQL:', err));

module.exports = client;
