const { User } = require('../models');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    // Pode adicionar lógica para gerar token JWT e enviar na resposta, se necessário

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao registrar usuário' });
  }
};

module.exports = {
  register,
};