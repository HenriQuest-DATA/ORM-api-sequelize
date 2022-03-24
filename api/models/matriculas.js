'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: 'estudante_id',
      });
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: 'turma_id',
      });
    }
  }
  Matriculas.init({
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['confirmado', 'cancelado']],
          msg: 'status inválido'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Matriculas',
    paranoid: true,
  });
  return Matriculas;
};