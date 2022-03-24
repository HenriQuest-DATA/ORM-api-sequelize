'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Pessoas', [{
      nome: 'Paula Moraes',
      ativo: true,
      email: 'paula@paula.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Fernando Novais',
      ativo: true,
      email: 'fernando@fernando.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Aline Fernandez',
      ativo: true,
      email: 'aline@aline.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Rafaela de Azevedo',
      ativo: true,
      email: 'rafaela@rafaela.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Lucas Castro',
      ativo: true,
      email: 'lucas@lucas.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Maria do Carmo',
      ativo: true,
      email: 'maria@maria.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Paulo de Abreu',
      ativo: true,
      email: 'paulo@paulo.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Felipe Nobrega',
      ativo: true,
      email: 'felipe@felipe.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'João do Carmo',
      ativo: true,
      email: 'joao@joao.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Fátima Josefina de Almeida',
      ativo: true,
      email: 'fatima@fatima.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Rodolfo Castro de Fernandes',
      ativo: true,
      email: 'rodolfo@rodolfo.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Letícia Nobrega Figueiredo',
      ativo: true,
      email: 'leticia@leticia.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Felipe do Val',
      ativo: true,
      email: 'felipev@felipev.com',
      role: 'estudante',
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
