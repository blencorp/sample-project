/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Then, we insert additional information related to each client
    await queryInterface.bulkInsert('AdditionalInfos', [
      {
        clientId: '59761c23b30d971669fb42ff', // Foreign key matching the client's id
        company: 'CEDWARD',
        email: 'dunlaphubbard@cedward.com',
        phone: '+1 (890) 543-2508',
        address: '169 Rutledge Street, Konterra, Northern Mariana Islands, 8551',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: '59761c233d8d0f92a6b0570d',
        company: 'EMERGENT',
        email: 'kirstensellers@emergent.com',
        phone: '+1 (831) 564-2190',
        address: '886 Gallatin Place, Fannett, Arkansas, 4656',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: '59761c23fcb6254b1a06dad5',
        company: 'ORGANICA',
        email: 'acostarobbins@organica.com',
        phone: '+1 (882) 441-3367',
        address: '697 Linden Boulevard, Sattley, Idaho, 1035',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AdditionalInfos', null, {});
  }
};
