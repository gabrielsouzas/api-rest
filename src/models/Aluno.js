// Model com as colunas da tabela que já foram configuradas no arquivo de migrations em database/migrations

import { Sequelize, Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    // Chama o init do pai (Model)
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
