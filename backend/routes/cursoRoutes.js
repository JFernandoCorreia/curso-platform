const express = require('express');
const autenticar = require('../middleware/authMiddleware');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

router.get('/', autenticar, cursoController.listarCursos);
router.post('/cadastrar', autenticar, cursoController.cadastrarCurso);
router.put('/:id/editar', autenticar, cursoController.editarCurso);
router.get('/:id/buscar', autenticar, cursoController.buscarCurso);
router.delete('/:id/deletar', autenticar, cursoController.deletarCurso);

module.exports = router;