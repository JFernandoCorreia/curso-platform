const jwt = require('jsonwebtoken');
const { User } = require('../models');

const autenticar = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decodificado = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decodificado.user;
    next();
  } catch (erro) {
    res.status(401).json({ msg: 'Token inválido.' });
  }
};

const criarUsuarioAdmin = async () => {
  try {
    // Verifica se já existe um usuário admin
    const adminExistente = await User.findOne({ email: 'jfernando@gmail.com' });

    // Se não existir, cria um usuário admin
    if (!adminExistente) {
      const novoAdmin = new User({
        name: 'Admin',
        email: 'jfernando@gmail.com',
        password: '0123456',
        role: 'admin',
      });

      await novoAdmin.save();
      console.log('Usuário administrador criado com sucesso.');
    }
  } catch (error) {
    console.error('Erro ao criar usuário administrador:', error);
  }
};

module.exports = { autenticar, criarUsuarioAdmin };