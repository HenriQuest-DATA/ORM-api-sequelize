const database = require('../models');
const Services = require('../services/index'); //não preciso instanciar pois tudo dentro dessa class é static
const sequelize = require('sequelize');
const PessoasServices = new Services.ServicesPessoas('Pessoas');

class PessoaController{
    static async createUmaPessoa(req, res){
        try{
            const dados = {
                ...req.body,
                createdAt: new Date()
            }
            const novoItem = await PessoasServices.createUm(dados);
            return res.status(200).json(novoItem);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readPessoasAtivas(req, res){
        try{
            const todosItems = await PessoasServices.readTodos();
            return res.status(200).json(todosItems);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readTodasPessoasComScope(req, res){
        try{
            const todosItems = await PessoasServices.lendoTodasPessoasComScope();
            return res.status(200).json(todosItems);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readTodasPessoasApagadas(req, res){
        try{
            const todosItems = await PessoasServices.lendoTodasPessoasApagadas();
            return res.status(200).json(todosItems);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readUmaPessoa(req, res){
        try{
            const id = Number(req.params.id);
            const umItem = await PessoasServices.readUm(id);
            return res.status(200).json(umItem);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async updateUmaPessoa(req, res){
        const dados = req.body;
        dados.updatedAt = new Date();
        const id = Number(req.params.id); //req.params.id
        try{
            const result = await PessoasServices.updateUm(dados, id); //método update retorna boolean [0, 1]
            if(result == 0){
                return res.status(400).json('Erro de update');
            } else{
                const atualizadoItem = await PessoasServices.readUm(id);
                return res.status(200).json({ ...atualizadoItem.dataValues, message: 'Atualizado com sucesso!' });
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async deleteUmaPessoa(req, res){
        const id = Number(req.params.id);
        try{
            const result = await PessoasServices.deleteUm(id);
            if(result == 0){
                return res.status(400).json('Erro!');
            } else{
                return res.status(200).json(`Id ${id} deletado com sucesso!`);
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async restauraUmaPessoa(req, res){
        const id = Number(req.params.id);
        try{
            const result = await PessoasServices.restauraUm(id);
            if(result == 0){
                return res.status(400).json('Erro');
            } else{
                return res.status(200).json(`Id ${id} restaurado com sucesso!`);
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async CancelaPessoa(req, res){
        const estudanteId = req.params.id;
        try{
            PessoasServices.CancelandoPessoa(estudanteId);
            return res.status(200).json(`Estudante de Id ${estudanteId} cancelado com sucesso!`);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }
}

module.exports = PessoaController;