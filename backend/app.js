const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');

const app = express();

// Configuração do bodyParser para lidar com JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração das rotas
const cursoRoutes = require('./routes/cursoRoutes');
app.use('/cursos', cursoRoutes);

// Configuração do Sequelize e sincronização com o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});