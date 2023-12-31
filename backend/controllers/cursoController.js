const { Curso } = require('../models');
const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const autenticar = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.use(express.static(path.join(__dirname, 'uploads')));

const cadastrarCurso = async (req, res) => {
  try {
    const { nome, professor, categoria, descricao, imagem } = req.body;
    const curso = await Curso.create({ nome, professor, categoria, descricao, imagem });

    res.status(201).json({ success: true, curso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao cadastrar curso' });
  }
};

const atualizarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, professor, categoria, descricao, imagem } = req.body;
    const curso = await Curso.findByPk(id);

    if (!curso) {
      return res.status(404).json({ success: false, message: 'Curso não encontrado' });
    }

    await curso.update({ nome, professor, categoria, descricao, imagem });

    res.status(200).json({ success: true, curso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao atualizar curso' });
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
    const curso = await Curso.findByPk(id);

    if (!curso) {
      return res.status(404).json({ success: false, message: 'Curso não encontrado' });
    }

    await curso.destroy();

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao deletar curso' });
  }
};

const listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.status(200).json({ success: true, cursos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar cursos' });
  }
};

const listarCursosAdmin = async (req, res) => {
  try {
    const usuario = req.usuario;

    if (usuario && usuario.isAdmin) {
      const cursos = await Curso.findAll();
      res.status(200).json({ success: true, cursos });
    } else {
      res.status(403).json({ success: false, message: 'Acesso negado. Permissões insuficientes.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar cursos para administrador' });
  }
};

const editarCursoAdmin = async (req, res) => {
  try {
    const usuario = req.usuario;

    if (usuario && usuario.isAdmin) {
      const { id } = req.params;
      const { nome, professor, categoria, descricao, imagem } = req.body;

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return res.status(404).json({ success: false, message: 'Curso não encontrado' });
      }

      await curso.update({
        nome: nome || curso.nome,
        professor: professor || curso.professor,
        categoria: categoria || curso.categoria,
        descricao: descricao || curso.descricao,
        imagem: imagem || curso.imagem,
      });

      res.json({ success: true, message: 'Curso editado com sucesso' });
    } else {
      res.status(403).json({ success: false, message: 'Acesso negado. Permissões insuficientes.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao editar curso para administrador' });
  }
};

const desativarCursoAdmin = async (req, res) => {
  try {
    const usuario = req.usuario;

    if (usuario && usuario.isAdmin) {
      const { id } = req.params;

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return res.status(404).json({ success: false, message: 'Curso não encontrado' });
      }

      await curso.update({ ativo: false });

      res.json({ success: true, message: 'Curso desativado com sucesso' });
    } else {
      res.status(403).json({ success: false, message: 'Acesso negado. Permissões insuficientes.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao desativar curso para administrador' });
  }
};

router.post('/cadastrar', autenticar, upload.single('imagem'), cadastrarCurso);
router.get('/admin/listar', autenticar, listarCursosAdmin);
router.put('/admin/:id/editar', autenticar, editarCursoAdmin);
router.put('/admin/:id/desativar', autenticar, desativarCursoAdmin);

module.exports = {
  cadastrarCurso,
  atualizarCurso,
  buscarCurso,
  deletarCurso,
  listarCursos,
  listarCursosAdmin,
  editarCursoAdmin,
  desativarCursoAdmin,
};