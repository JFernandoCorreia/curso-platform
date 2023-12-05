const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const cursoRoutes = require('./routes/cursoRoutes');
const authRoutes = require('./routes/authRoutes');

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
}).catch(err => {/* The code `console.error('Erro ao sincronizar o banco de dados:', err);` is logging an error message to the console. It is used to display an error message when there is an error while synchronizing the database using Sequelize. The error message will include the string "Erro ao sincronizar o banco de dados:" followed by the actual error message stored in the `err` variable. */

  console.error('Erro ao sincronizar o banco de dados:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});