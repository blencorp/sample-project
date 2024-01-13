'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      // Define association here
    }
  }
  Client.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    age: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
