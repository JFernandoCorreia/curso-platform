const jwt = require('jsonwebtoken');

const autenticar = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!usuarioAtenticado) {
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

module.exports = autenticar;