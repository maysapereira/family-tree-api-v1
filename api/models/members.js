'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Members.init({
    name: DataTypes.STRING,
    parents: DataTypes.STRING,
    grandparents: DataTypes.STRING,
    children: DataTypes.STRING,
    cousins: DataTypes.STRING,
    brothers_sisters: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};