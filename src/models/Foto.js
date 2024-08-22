import { Model, Sequelize } from "sequelize";
import appConfig from "../config/appConfig";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ficar vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ficar vazio",
            },
          },
        },
        /**
         * O Sequelize.VIRTUAL é um tipo de dado que não é armazenado no banco de dados.
         * Ele existe apenas na instância do modelo enquanto o objeto está em memória.
         * Isso significa que o campo url não será uma coluna real na tabela fotos.
         * Em vez disso, ele será calculado dinamicamente quando o modelo for instanciado.
         */
        url: {
          type: Sequelize.VIRTUAL,
          /**
           * O método get() define um "getter" para o campo virtual url.
           * Sempre que você acessar o campo url em uma instância de Foto, o método get() será chamado.
           * Ele retorna uma string que é construída utilizando o valor da propriedade filename do modelo e a URL base definida em appConfig.url.
           * Essencialmente, ele cria um link completo para a imagem, assumindo que o arquivo de imagem é armazenado no diretório /images/ no servidor.
           */
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      }
    );
    return this;
  }

  // Associação da chave estrangeira aluno_id na tabela fotos
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
