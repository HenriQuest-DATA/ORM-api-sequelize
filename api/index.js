const express = require('express');
const app = express();
const data = require('./data/default.json');
const routes = require('./routes');

routes(app);

app.listen(data.porta, () => console.log(`Servidor rodando na porta ${data.porta}`));
