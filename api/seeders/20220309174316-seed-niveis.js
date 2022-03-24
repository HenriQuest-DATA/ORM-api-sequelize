'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Niveis', [{
      descri_nivel: 'Básico',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      descri_nivel: 'Intermediário',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      descri_nivel: 'Avançado',
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
