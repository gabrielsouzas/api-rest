// Model com as colunas da tabela que já foram configuradas no arquivo de migrations em database/migrations

import { Sequelize, Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    // Chama o init do pai (Model)
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
