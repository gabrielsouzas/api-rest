/* eslint-disable no-undef */
// Nesse arquivo tem que usar CommonJS porque ele é usado pelo sequelizeCLI

require("dotenv").config();

module.exports = {
  /* SQLite */
  // dialect: "sqlite",
  // storage: "./db.sqlite",

  /* MySQL / MariaDB */
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialect: "mariadb",

  // Gerando erro porque a tabela timezones do mysql está vazia no windows
  /*dialectOptions: {
    timezone: "UTC", // Define o timezone como UTC
    // timezone: "America/Sao_Paulo",
  },
  timezone: "UTC", // Define o timezone como UTC
  // timezone: "America/Sao_Paulo",*/

  /* ALL  - Para gravar datas de alterações dos dados*/
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};
