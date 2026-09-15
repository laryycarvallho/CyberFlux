const express = require('express');
const app = express();
const PORT = 3000;
const pool = require('./database/connection');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// Conecta ao banco
require('./database/connection');

// Importa rotas
const eventRoutes = require('./routes/eventRoutes');
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
    res.send('Servidor CyberFlux está rodando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ message: 'Conexão com o banco de dados bem-sucedida', time: result.rows[0].now });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        res.status(500).json({ message: 'Erro ao conectar ao banco de dados' });
    }
});

app.use('/auth', authRoutes);
