/* eslint-disable no-undef */

// Migration para alterar uma coluna na tabela

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //                                 tabela, coluna
    await queryInterface.changeColumn("alunos", "email", {
      type: Sequelize.STRING, // Já tinha
      allowNull: false, // Já tinha
      unique: true, // Nova configuração
    });
  },

  async down() {},
};
