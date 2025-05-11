const express = require('express');
const path = require('path');

const app = express();
const port = 8080;  // Alterado para 8080

// Configura o diretório 'public' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor na porta 8080
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
