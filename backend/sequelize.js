const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'sqlite',
  },
  // Adicione configurações adicionais conforme necessário (produção, teste, etc.)
};