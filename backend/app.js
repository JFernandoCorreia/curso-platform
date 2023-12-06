const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const cursoRoutes = require('./routes/cursoRoutes');
const authRoutes = require('./routes/authRoutes');
const path = require('path');

const app = express();

// Configuração do bodyParser para lidar com JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração das rotas
app.use('/cursos', cursoRoutes);
app.use('/auth', authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuração do Sequelize e sincronização com o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

// Configuração para servir arquivos estáticos na rota /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});