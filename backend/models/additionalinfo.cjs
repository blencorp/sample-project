'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdditionalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdditionalInfo.init({
    clientId: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AdditionalInfo',
  });
  return AdditionalInfo;
};