const Services = require('./Services');
const database = require('../models');
const data = require('../data/default.json');
const Sequelize = require('sequelize');

class TurmasServices extends Services{
    constructor(){
        super('Turmas');
    }

    async achandoMatriculas(turmaID){
        console.log(turmaID);
        //posso chamar o mesmo método pois o escopo foi definido no modelo pessoas
        const todasMatriculasNaTurma = await database.Matriculas.findAndCountAll({ 
                                                                    where: { 
                                                                        turma_id: turmaID, 
                                                                        status: 'confirmado' 
                                                                    },
                                                                    limit: 20,
                                                                    order: [['estudante_id', 'ASC']]
                                                                });
        //no caso de pessoas, vai chamar somente as ativas, pois se escopo não for declarado o sequelize vai usar o padrão
        return todasMatriculasNaTurma;
    }

    async agrupandoTurmas(){
        return await database.Matriculas.findAndCountAll({ 
                                            where: {
                                                status: 'confirmado'
                                            },
                                            attributes: ['turma_id'],
                                            group: ['turma_id']
                                        });
    }

    async pegandoTurmasLotadas(){
        return await database.Matriculas.findAndCountAll({ 
                                            where: {
                                                status: 'confirmado'
                                            },
                                            attributes: ['turma_id'],
                                            group: ['turma_id'],
                                            having: Sequelize.literal(`count(turma_id) >= ${data.lotacao}`) 
                                            //usando having: Sequelize.literal dessa forma pega somente as lotadas, ou seja, agrupamento os ids de turma iguais e pega somente os agrupamentos maiores ou iguais à lotação
                                            //Sequelize.literal: isso é literalmente sql query
                                        });
    }
}

module.exports = TurmasServices;