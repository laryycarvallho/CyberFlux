const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Importa as rotas de eventos
const eventRoutes = require('./routes/eventRoutes');

// Usa as rotas de eventos no servidor
app.use('/events', eventRoutes);

// Rota simples para testar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor CyberFlux está rodando');
});

// Inicializa o servidor e começa a escutar na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
