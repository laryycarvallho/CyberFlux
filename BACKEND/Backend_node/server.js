const express = require('express');
const app = express();
const PORT = 3000;

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

