/* eslint-disable no-undef */
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { resolve } from "path";

dotenv.config();

// Chama o arquivo index.js da database, que configura a chamada dos models
import "./database";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

// Lista de endereções que porerão acessar a API
const whitelist = [
  "https://seudominiorodandoaaplicacaoreact.com.br",
  "http://localhost:3000",
];

// Configuralção das opções de CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Se encontrar a origin (end que está tentando acessar) na whitelist, ou se não existir origin (insomnia), passa
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Neste caso app seria o express

    // this.app.use((req, res, next) => {
    //   res.setHeader(
    //     "Content-Security-Policy",
    //     "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self'; img-src 'self' http://localhost:3000 data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests"
    //   );
    //   next();
    // });

    // Configurações politica de CORS, as opções são opcionais
    this.app.use(cors(corsOptions));
    this.app.use(helmet());

    // this.app.use(
    //   helmet({
    //     // crossOriginResourcePolicy: false,
    //     crossOriginEmbedderPolicy: false,
    //   })
    // );

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
