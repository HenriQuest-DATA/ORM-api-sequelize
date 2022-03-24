const database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op; //preciso importar os operadores
const Services = require('../services/index'); //não preciso instanciar pois tudo dentro dessa class é static
const sequelize = require('sequelize');
const TurmasServices = new Services.ServicesTurmas('Turmas');
const data = require('../data/default.json');

class TurmaController{
    static async createUmaTurma(req, res){
        try{
            const dados = {
                ...req.body,
                createdAt: new Date()
            }
            const novoItem = await TurmasServices.createUm(dados);
            return res.status(200).json(novoItem);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readTodasTurmas(req, res){ 
        //http://localhost:3000/turmas?data_inicial=2022-03-01&data_final=2022-03-04
        const { data_inicial, data_final } = req.query; //aqui precisa ser o mesmo nome da query
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try{
            const todosItems = await TurmasServices.readTodos(where); //no caso de pessoas, vai chamar somente as ativas, pois se escopo não for declarado o sequelize vai usar o padrão
            return res.status(200).json(todosItems);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async readUmaTurma(req, res){
        try{
            const id = Number(req.params.id);
            const umItem = await TurmasServices.readUm(id);
            return res.status(200).json(umItem);
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async updateUmaTurma(req, res){
        const dados = req.body;
        dados.updatedAt = new Date();
        const id = Number(req.params.id); //req.params.id
        try{
            const result = await TurmasServices.updateUm(dados, id); //método update retorna boolean [0, 1]
            if(result == 0){
                return res.status(400).json('Erro de update');
            } else{
                const atualizadoItem = await TurmasServices.readUm(id);
                return res.status(200).json({ ...atualizadoItem.dataValues, message: 'Atualizado com sucesso!' });
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async deleteUmaTurma(req, res){
        const id = Number(req.params.id);
        try{
            const result = await TurmasServices.deleteUm(id);
            if(result == 0){
                return res.status(400).json('Erro!');
            } else{
                return res.status(200).json(`Id ${id} deletado com sucesso!`);
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async restauraUmaTurma(req, res){
        const id = Number(req.params.id);
        try{
            const result = await TurmasServices.restauraUm(id);
            if(result == 0){
                return res.status(400).json('Erro');
            } else{
                return res.status(200).json(`Id ${id} restaurado com sucesso!`);
            }
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async AchaMatriculasPorTurma(req, res){
        const turmaID = req.params.id;
        try{
            // const turma = await database.Turmas.findOne( { where: { id: turmaID } } );
            // const matriculas = await turma.getTurmasMatriculadas(); //nome definido no modelo pessoas na área de associações
            const todasAsMatriculasPorTurma = await TurmasServices.achandoMatriculas(turmaID);                                          
            todasAsMatriculasPorTurma.count >= data.lotacao ? todasAsMatriculasPorTurma.lotacao = 'lotado' : todasAsMatriculasPorTurma.lotacao = 'com vagas';
            return res.status(200).json(todasAsMatriculasPorTurma); //todasMatriculas
        } catch(e){
            return res.status(500).json(e.message);
        }
    }

    static async MatriculasAgrupadasPorTurma(req, res){
        try{
            
            const MatriculasAgrupadasPorTurma = await TurmasServices.agrupandoTurmas();

            const turmasIsoladas = MatriculasAgrupadasPorTurma.count;
            turmasIsoladas.forEach(element => {
                element.count >= data.lotacao ? element.lotacao = 'lotado' : element.lotacao = 'com vagas';
            });

            return res.status(200).json(turmasIsoladas);
        } catch(e){
            return res.status(400).json(e.message);
        }
    }

    //trocar
    static async PegaTurmasLotadas(req, res){
        try{
            const ApenasTurmaLotadas = await TurmasServices.pegandoTurmasLotadas();
            return res.status(200).json(ApenasTurmaLotadas.count);
        } catch(e){
            return res.status(400).json(e.message);
        }
    }
}

module.exports = TurmaController;