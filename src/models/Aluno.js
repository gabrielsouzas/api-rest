// Model com as colunas da tabela que já foram configuradas no arquivo de migrations em database/migrations

import { Sequelize, Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    // Chama o init do pai (Model)
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "E-mail já existe",
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um número inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Peso precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Congiguração chave estrangeira das fotos do aluno
  // Foi preciso colocar esse método para funcionar a busca da foto junto com o aluno em index, show
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
