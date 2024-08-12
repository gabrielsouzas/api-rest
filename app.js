import dotenv from "dotenv";
dotenv.config();

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";

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
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

// Exporta a classe já instanciada, passando apenas a variavel app, que é o express configurado para uso
export default new App().app;
