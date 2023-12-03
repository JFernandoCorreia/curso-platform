const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    const token = jwt.sign({ user: { id: user.id, email: user.email } }, process.env.JWT_SECRET);

    res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao registrar usuário' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ user: { id: user.id, email: user.email } }, process.env.JWT_SECRET);

    res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao realizar login' });
  }
};

module.exports = {
  register,
  login,
};