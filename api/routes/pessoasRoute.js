const Router = require('express').Router;
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.post('/pessoas', (requisicao, resposta) => {
    PessoaController.createUmaPessoa(requisicao, resposta);
});

router.get('/pessoas', (requisicao, resposta) => {
    PessoaController.readTodasPessoasComScope(requisicao, resposta);
});

router.get('/pessoas/ativas', (requisicao, resposta) => {
    PessoaController.readPessoasAtivas(requisicao, resposta);
});

router.get('/pessoas/apagadas', (requisicao, resposta) => {
    PessoaController.readTodasPessoasApagadas(requisicao, resposta);
})

router.get('/pessoas/:id', (requisicao, resposta) => {
    PessoaController.readUmaPessoa(requisicao, resposta);
});

router.patch('/pessoas/:id', (requisicao, resposta) => {
    PessoaController.updateUmaPessoa(requisicao, resposta);
});

router.delete('/pessoas/:id', (requisicao, resposta) => {
    PessoaController.deleteUmaPessoa(requisicao, resposta);
});

router.post('/pessoas/:id/restaura', (requisicao, resposta) => {
    PessoaController.restauraUmaPessoa(requisicao, resposta);
});

router.post('/pessoas/:id/cancela', (requisicao, resposta) => {
    PessoaController.CancelaPessoa(requisicao, resposta);
});

module.exports = router;