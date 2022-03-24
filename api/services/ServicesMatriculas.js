const Services = require('./Services');
const database = require('../models');

class MatriculasServices extends Services{
    constructor(){
        super('Matriculas');
    }

    async lendoUmaMatricula(estudanteId, matriculaId){
        return await database[this.nomeModelo]
                    .findOne({ 
                                where: { 
                                    estudante_id: estudanteId, 
                                    id: matriculaId 
                                }
                            });
    }

    async lendoTodasMatriculas(estudanteId){
        return await database[this.nomeModelo].findAll({ where: { estudante_id: estudanteId } }); 
        //no caso de pessoas, vai chamar somente as ativas, pois se escopo não for declarado o sequelize vai usar o padrão
    }

    async criandoUmaMatricula(dados){
        return await database[this.nomeModelo].create(dados);
    }

    async atualizandoUmaMatricula(dados, estudanteId, matriculaId){
        const result = await database[this.nomeModelo].update(dados, { where: { estudante_id: estudanteId, id: matriculaId } });
        const atualizadaMatricula = await database.Matriculas.findOne({ where: { estudante_id: estudanteId, id: matriculaId } });
        return atualizadaMatricula;
    }

    async deletandoUmaMatricula(estudanteId, matriculaId){
        return await database[this.nomeModelo].destroy({ where: { estudante_id: estudanteId, id: matriculaId } });
    }
}

module.exports = MatriculasServices;