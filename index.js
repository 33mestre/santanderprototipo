// Instale o Express primeiro com: npm install express
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Porta onde o servidor irá rodar

app.use(express.static(path.join(__dirname, 'public')));


// Serve o arquivo index.html quando acessar a rota '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/presentation', (req, res) => {
    res.sendFile(path.join(__dirname, 'presentation.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});