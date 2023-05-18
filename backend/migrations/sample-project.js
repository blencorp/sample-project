'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('clients ', {
      id: {
        type: Sequelize.STRING(40),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });

    await queryInterface.createTable('additional_info', {
      id: {
        type: Sequelize.STRING(40),
        allowNull: false,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.STRING(40),
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id',
        },
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });

    const tableInfo = await queryInterface.describeTable('additional_info');
    if (!tableInfo.client_id) {
      await queryInterface.addConstraint('additional_info', {
        fields: ['client_id'],
        type: 'foreign key',
        name: 'additional_info_client_id_fkey',
        references: {
          table: 'clients',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('additional_info', 'additional_info_client_id_fkey');
    await queryInterface.dropTable('additional_info');
    await queryInterface.dropTable('clients');
  }
};
