import { DataTypes } from 'sequelize';
import sequelize from '../db';
import { ClientInstance, AdditionalInfoInstance } from '../types';

const ClientModel = sequelize.define<ClientInstance>('Client', {
  id: {
    type: DataTypes.STRING(40),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(6),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: sequelize.literal('NOW()'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    allowNull: false,
    defaultValue: sequelize.literal('NOW()'),
  },
}, {
  tableName: 'clients',
});

const AdditionalInfoModel = sequelize.define<AdditionalInfoInstance>('additionalInfo', {
  id: {
    type: DataTypes.STRING(40),
    allowNull: false,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.STRING(40),
    allowNull: false,
    references: {
      model: 'clients',
      key: 'id',
    },
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: sequelize.literal('NOW()'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    allowNull: false,
    defaultValue: sequelize.literal('NOW()'),
  },
}, {
  tableName: 'additional_info',
});

ClientModel.hasOne(AdditionalInfoModel, { foreignKey: 'client_id' });
AdditionalInfoModel.belongsTo(ClientModel, { foreignKey: 'client_id' });

export { ClientModel, AdditionalInfoModel };