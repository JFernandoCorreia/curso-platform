const { Sequelize } = require('sequelize');

// Configure as informações do seu banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;