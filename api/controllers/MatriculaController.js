const database = require('../models');
const Services = require('../services/index');
const sequelize = require('sequelize');
const MatriculasServices = new Services.ServicesMatriculas('Matriculas');

class MatriculaController{
    static async readUmaMatricula(req, res){
        const estudanteId = req.params.estudanteId;
        const matriculaId = req.params.matriculaId;
        try{
            const umaMatricula = await MatriculasServices.lendoUmaMatricula(estudanteId, matriculaId);
            return res.status(200).json(umaMatricula);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readTodasMatriculas(req, res){
        const estudanteId = req.params.estudanteId;
        try{
            const todosItems = await MatriculasServices.lendoTodasMatriculas(estudanteId);
            return res.status(200).json(todosItems);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async createUmaMatricula(req, res){
        const dados = {
            ...req.body,
            estudante_id: req.params.estudanteId,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        try{
            const novaMatricula = await MatriculasServices.criandoUmaMatricula(dados);
            return res.status(200).json(novaMatricula);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async updateUmaMatricula(req, res){
        const dados = req.body;
        dados.updatedAt = new Date();
        const estudanteId = req.params.estudanteId;
        const matriculaId = req.params.matriculaId;
        try{
            const atualizadaMatricula = MatriculasServices.atualizandoUmaMatricula(dados, estudanteId, matriculaId);
            return res.status(200).json({ ...atualizadaMatricula.dataValues, message: 'Atualizado com sucesso!' });
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async deleteUmaMatricula(req, res){
        const estudanteId = req.params.estudanteId;
        const matriculaId = req.params.matriculaId;
        try{
            await MatriculasServices.deletandoUmaMatricula(estudanteId, matriculaId);
            return res.status(200).json(`Id ${req.params.matriculaId} deletado com sucesso da tabela Matrículas!`);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }
}

module.exports = MatriculaController;