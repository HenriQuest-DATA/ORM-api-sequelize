const Router = require('express').Router;
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas/lotacao', (requisicao, resposta) => {
    TurmaController.MatriculasAgrupadasPorTurma(requisicao, resposta);
});

router.get('/turmas/lotadas', (requisicao, resposta) => {
    TurmaController.PegaTurmasLotadas(requisicao, resposta);
});

router.post('/turmas', (requisicao, resposta) => {
    TurmaController.createUmaTurma(requisicao, resposta);
});

router.get('/turmas', (requisicao, resposta) => {
    TurmaController.readTodasTurmas(requisicao, resposta);
});

router.get('/turmas/:id', (requisicao, resposta) => {
    TurmaController.readUmaTurma(requisicao, resposta);
});

router.patch('/turmas/:id', (requisicao, resposta) => {
    TurmaController.updateUmaTurma(requisicao, resposta);
});

router.delete('/turmas/:id', (requisicao, resposta) => {
    TurmaController.deleteUmaTurma(requisicao, resposta);
});

router.post('/turmas/:id/restaura', (requisicao, resposta) => {
    TurmaController.restauraUmaTurma(requisicao, resposta);
});

router.get('/turmas/:id/matriculas', (requisicao, resposta) => {
    TurmaController.AchaMatriculasPorTurma(requisicao, resposta);
});

module.exports = router;