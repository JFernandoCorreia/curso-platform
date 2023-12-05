const express = require('express');
const autenticar = require('../middleware/authMiddleware');
const cursoController = require('../controllers/cursoController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cursosRouter = require('./cursos');

const router = express.Router();

router.use('/cursos', cursosRouter);

router.post('/cadastrar', autenticar, upload.single('imagem'), cursoController.cadastrarCurso);
router.get('/:id/listar', autenticar, cursoController.listarCursos);
router.put('/:id/atualizar', autenticar, cursoController.atualizarCurso);
router.get('/:id/buscar', autenticar, cursoController.buscarCurso);
router.delete('/:id/deletar', autenticar, cursoController.deletarCurso);

module.exports = router;