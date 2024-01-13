/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // First, we insert clients
    await queryInterface.bulkInsert('Clients', [
      {
        id: '59761c23b30d971669fb42ff',
        age: 36,
        name: 'Dunlap Hubbard',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '59761c233d8d0f92a6b0570d',
        age: 24,
        name: 'Kirsten Sellers',
        gender: 'female', // Assuming this is a typo in your data and should be at the client level, not in additionalInfo
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '59761c23fcb6254b1a06dad5',
        age: 30,
        name: 'Acosta Robbins',
        gender: 'male', // Same as above
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
