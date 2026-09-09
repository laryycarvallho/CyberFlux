//Esse código inicia um servidor Express, configura JSON, cria uma rota de teste e começa a escutar requisições na porta 3000.

const express = require('express'); //importa o express, q é um framework para criar servidores web em Node.js
const app = express();  //cria o servidor q vai receber requisições
const PORT = 3000;
app.use(express.json());

//Rota simples para testar se o servidor está funcionando
app.get('/', (req, res) => {
    
    res.send('Servidor CyberFlux está rodando');
});

//inicializa o servidor e começa a escutar na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
