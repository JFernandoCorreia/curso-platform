const express = require('express');
const Curso = require('../models/Curso');
const router = express.Router();

// Cadastro de Curso
router.post('/cadastrar', async (req, res) => {
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

    res.json({ success: true, curso: novoCurso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao cadastrar curso' });
  }
});

module.exports = router;