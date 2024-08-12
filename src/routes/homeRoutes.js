import { Router } from "express";
// Aqui já vem o objeto instanciado da classe, pronto para ser usado
import homeController from "../controllers/HomeController";

const router = new Router();

router.get("/", homeController.index);

export default router;
