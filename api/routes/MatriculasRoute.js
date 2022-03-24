const Router = require('express').Router;
const MatriculaController = require('../controllers/MatriculaController'); //não preciso instanciar pois é static

const router = Router();

router.get('/pessoas/:estudanteId/matriculas/:matriculaId', (requisicao, resposta) => {
    MatriculaController.readUmaMatricula(requisicao, resposta);
});

router.get('/pessoas/:estudanteId/matriculas', (requisicao, resposta) => {
    MatriculaController.readTodasMatriculas(requisicao, resposta);
});

router.post('/pessoas/:estudanteId/matriculas/', (requisicao, resposta) => {
    MatriculaController.createUmaMatricula(requisicao, resposta);
});

router.patch('/pessoas/:estudanteId/matriculas/:matriculaId', (requisicao, resposta) => {
    MatriculaController.updateUmaMatricula(requisicao, resposta);
});

router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', (requisicao, resposta) => {
    MatriculaController.deleteUmaMatricula(requisicao, resposta);
});

module.exports = router;