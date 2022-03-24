'use strict';

//validações no próprio model

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id',
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado' }, //somente as matrículas com status confirmado
        as: 'AulasMatriculadas' //cada palavra tem que começar com maiúscula
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        // len: {
        //   args: [3, 50],
        //   msg: 'nome inválido'
        // }
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw new Error('nome inválido');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { //true
          args: true,
          msg: 'email inválido'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['estudante', 'docente']],
          msg: 'função inválida'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: { where: { ativo: true } },
    scopes: { todos: { where: {} } }
  });
  return Pessoas;
};