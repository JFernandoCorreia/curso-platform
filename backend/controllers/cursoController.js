const Curso = require('../models/Curso');

// Função para cadastrar um curso
const cadastrarCurso = async (req, res) => {
  try {
    const { nome, professor, categoria, descricao, imagem } = req.body;

    // Crie o curso no banco de dados
    const novoCurso = await Curso.create({
      nome,
      professor,
      categoria,
      descricao,
      imagem,
    });

    return { success: true, curso: novoCurso };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Erro ao cadastrar curso' };
  }
};

module.exports = {
  cadastrarCurso,
};