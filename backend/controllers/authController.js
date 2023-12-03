const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }

    // Pode adicionar lógica para gerar token JWT e enviar na resposta, se necessário

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao realizar login' });
  }
};

module.exports = {
  register,
  login,
};