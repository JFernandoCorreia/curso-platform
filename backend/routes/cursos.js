const express = require('express');
const autenticar = require('../middleware/authMiddleware');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

router.post('/cadastrar', autenticar, cursoController.cadastrarCurso);
router.get('/listar', autenticar, cursoController.listarCursos);
router.put('/:id/atualizar', autenticar, cursoController.atualizarCurso);
router.get('/:id/buscar', autenticar, cursoController.buscarCurso);
router.delete('/:id/deletar', autenticar, cursoController.deletarCurso);

module.exports = router;