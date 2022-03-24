const Router = require('express').Router;
const NivelController = require('../controllers/NivelController');

const router = Router();

router.post('/niveis', (requisicao, resposta) => {
    NivelController.createUmNivel(requisicao, resposta);
});

router.get('/niveis', (requisicao, resposta) => {
    NivelController.readTodosNiveis(requisicao, resposta);
});

router.get('/niveis/:id', (requisicao, resposta) => {
    NivelController.readUmNivel(requisicao, resposta);
});

router.patch('/niveis/:id', (requisicao, resposta) => {
    NivelController.updateUmNivel(requisicao, resposta);
});

router.delete('/niveis/:id', (requisicao, resposta) => {
    NivelController.deleteUmNivel(requisicao, resposta);
});

router.post('/niveis/:id/restaura', (requisicao, resposta) => {
    NivelController.restauraUmNivel(requisicao, resposta);
});

module.exports = router;