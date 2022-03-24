const express = require('express');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');
const matriculas = require('./matriculasRoute');

module.exports = app => {
    app.use(express.urlencoded());
    app.use(express.json());

    app.use(pessoas, niveis, turmas, matriculas);

    app.get('/', (requisicao, resposta) => {
        resposta.send('API ORMs');
    });
}