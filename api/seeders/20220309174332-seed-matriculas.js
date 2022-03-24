'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [{
      status: 'confirmado',
      estudante_id: 1,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      status: 'confirmado',
      estudante_id: 3,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      status: 'confirmado',
      estudante_id: 4,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      status: 'confirmado',
      estudante_id: 6,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      status: 'confirmado',
      estudante_id: 7,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      status: 'confirmado',
      estudante_id: 9,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      status: 'confirmado',
      estudante_id: 10,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      status: 'confirmado',
      estudante_id: 12,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     }, 
     {
      status: 'confirmado',
      estudante_id: 13,
      turma_id: 3,
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
