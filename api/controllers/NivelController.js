const database = require('../models');
const Services = require('../services/index');
const NiveisServices = new Services.ServicesNiveis('Niveis');


class NivelController{
    static async createUmNivel(req, res){
        try{
            const dados = {
                ...req.body,
                createdAt: new Date()
            }
            const novoItem = await NiveisServices.createUm(dados);
            return res.status(200).json(novoItem);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readTodosNiveis(req, res){
        try{
            const todosItems = await NiveisServices.readTodos();
            return res.status(200).json(todosItems);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readUmNivel(req, res){
        try{
            const id = Number(req.params.id);
            const umItem = await NiveisServices.readUm(id);
            return res.status(200).json(umItem);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async updateUmNivel(req, res){
        const dados = req.body;
        dados.updatedAt = new Date();
        const id = Number(req.params.id); //req.params.id
        try{
            const result = await NiveisServices.updateUm(dados, id); //método update retorna boolean [0, 1]
            if(result == 0){
                return res.status(400).json('Erro de update');
            } else{
                const atualizadoItem = await NiveisServices.readUm(id);
                return res.status(200).json({ ...atualizadoItem.dataValues, message: 'Atualizado com sucesso!' });
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async deleteUmNivel(req, res){
        const id = Number(req.params.id);
        try{
            const result = await NiveisServices.deleteUm(id);
            if(result == 0){
                return res.status(400).json('Erro!');
            } else{
                return res.status(200).json(`Id ${id} deletado com sucesso!`);
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }
    
    static async restauraUmNivel(req, res){
        const id = Number(req.params.id);
        try{
            const result = await NiveisServices.restauraUm(id);
            if(result == 0){
                return res.status(400).json('Erro');
            } else{
                return res.status(200).json(`Id ${id} restaurado com sucesso!`);
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }
}

module.exports = NivelController;