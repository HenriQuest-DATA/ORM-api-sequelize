const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');

class PessoasServices extends Services{
    constructor(){
        super('Pessoas');
    }

    async lendoTodasPessoasComScope(){
        //posso chamar o mesmo método pois o escopo foi definido no modelo pessoas
        const todosItems = await database[this.nomeModelo].scope('todos').findAll(); 
        //no caso de pessoas, vai chamar somente as ativas, pois se escopo não for declarado o sequelize vai usar o padrão
        return todosItems;
    }

    async CancelandoPessoa(id){ 
        //como aqui eu faço atualizações em mais de uma banco, é sempre com ter em mente que pode dar um erro no meio da execução e modificar os dados apenas parcialmente, o que casaria um erro
        //por isso é sempre bom usar transactions, que verificam se tudo dá certo antes de fazer um commit no banco
        database.sequelize.transaction(async transacao => {
            await database[this.nomeModelo].update({ ativo: false }, { where: { id: id } }, { transaction: transacao });
            await database['Matriculas'].update({ status: 'cancelado' }, { where: { estudante_id: id } }, { transaction: transacao });
        });
    }

    async lendoTodasPessoasApagadas(where){
        const todosItems = await database[this.nomeModelo].scope('todos').findAll({
                                                                            where: {
                                                                                ...where, 
                                                                                deletedAt: {
                                                                                    [Sequelize.Op.not]: null
                                                                                }  
                                                                            },
                                                                            paranoid: false
                                                                        });
        return todosItems;
    }
}

module.exports = PessoasServices;