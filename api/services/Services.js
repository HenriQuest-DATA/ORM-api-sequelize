const database = require('../models');
const Sequelize = require('sequelize');

class modulesControllers{
    constructor(nomeModelo){
        this.nomeModelo = nomeModelo;
    }

    async createUm(dados){ //certo
        const novoItem = await database[this.nomeModelo].create(dados);
        return novoItem;
    }

    async readTodos(where){ //certo
        const todosItems = await database[this.nomeModelo].findAll( { where } );
        return todosItems;
    }

    async readApagados(where){ //certo
        const todosItems = await database[this.nomeModelo].findAll({
                                                            where: { 
                                                                deletedAt: {
                                                                    [Sequelize.Op.not]: null
                                                                }  
                                                            },
                                                            paranoid: false
                                                        });
        return todosItems;
    }

    async readUm(id){ //certo
        //funcionaria sem static com new antes do nome da class em module.exports, para instanciar a class
        const umItem = await database[this.nomeModelo].findOne( { where: { id: id } } );
        return umItem;
    }

    async updateUm(dados, id){ //certo
        return await database[this.nomeModelo].update(dados, { where: { id: id } }); //método update retorna boolean [0, 1]
    }

    async deleteUm(id){ //certo
        return await database[this.nomeModelo].destroy({ where: { id: id } }); //método destroy retorna boolean [0, 1]
    }

    async restauraUm(id){
        return await database[this.nomeModelo].restore({ where: { id: id } });
    }
}

module.exports = modulesControllers;