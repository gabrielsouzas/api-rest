// Arquivo que configura a chamada dos models, sempre que um novo model for criado, ele precisa passar por aqui

import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// Verifica se o model tem o método associate (config. chave estrangeira)
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
