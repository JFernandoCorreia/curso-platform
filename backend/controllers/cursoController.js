const { Curso } = require('../models');

const cadastrarCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json({ success: true, curso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao cadastrar curso' });
  }
};

const editarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const [updatedRows] = await Curso.update(req.body, { where: { id } });

    if (updatedRows > 0) {
      res.json({ success: true, message: 'Curso editado com sucesso.' });
    } else {
      res.status(404).json({ success: false, message: 'Curso não localizado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao editar curso' });
  }
};

const buscarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);

    if (curso) {
      res.json({ success: true, curso });
    } else {
      res.status(404).json({ success: false, message: 'Curso não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao buscar curso' });
  }
};

const deletarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Curso.destroy({ where: { id } });

    if (deletedRows > 0) {
      res.json({ success: true, message: 'Curso deletado com sucesso.' });
    } else {
      res.status(404).json({ success: false, message: 'Curso não localizado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao deletar curso' });
  }
};

const listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar os cursos.' });
  }
};

module.exports = {
  cadastrarCurso,
  editarCurso,
  buscarCurso,
  deletarCurso,
  listarCursos,
};