'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [{
      data_inicio: '2022-03-01',
      docente_id: 2,
      nivel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      data_inicio: '2022-03-02',
      docente_id: 5,
      nivel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      data_inicio: '2022-03-03',
      docente_id: 8,
      nivel_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
