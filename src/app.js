/* eslint-disable no-undef */
import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();

// Chama o arquivo index.js da database, que configura a chamada dos models
import "./database";

import express from "express";
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Neste caso app seria o express
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    // Configuração da pasta de arquivos estáticos, para poder acessar as fotos salvas em uploads
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

// Exporta a classe já instanciada, passando apenas a variavel app, que é o express configurado para uso
export default new App().app;
