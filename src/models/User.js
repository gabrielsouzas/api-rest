// Model com as colunas da tabela que já foram configuradas no arquivo de migrations em database/migrations

import { Sequelize, Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    // Chama o init do pai (Model)
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "", // Se o type não for enviado esse campo joga um valor default
          validate: {
            // Valida o campo com verificações desejadas
            len: {
              args: [3, 255],
              msg: "O nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já existe",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha precisa ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    // Hook que vai executar uma ação antes de salvar
    this.addHook("beforeSave", async (user) => {
      // Checa se está passando a senha para fazer o hash, caso não passe, vai tentar fazer o hash de um valor nulo
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
