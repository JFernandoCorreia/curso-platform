const jwt = require('jsonwebtoken');

const verificarAutenticacao = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decodificado = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decodificado.usuario;
    next();
  } catch (erro) {
    res.status(401).json({ msg: 'Token inválido.' });
  }
};

module.exports = verificarAutenticacao;