const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Curso = (sequelize, DataTypes) => {
  const model = sequelize.define('Curso', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    professor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  return model;

};

module.exports = Curso;
