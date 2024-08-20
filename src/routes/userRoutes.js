import { Router } from "express";
// Aqui já vem o objeto instanciado da classe, pronto para ser usado
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
// router.get("/", userController.index); // Lista de usuários pode ser considerada uma falha de segurança
// router.get("/:id", userController.show); // Lista usuário

/**
 * O usuário não deve ter permissão de escolher im ID na rota, ele deve apenas editar o seus dados
 * Esse valor de ID vai ser passado pela autenticação do token
 */
router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/**
 * index - Lista todos os usuários: GET
 * store/create - Cria um novo usuário: POST
 * delete - Apaga um usuário: DELETE
 * show - Mostra um usuário: GET
 * update - Atualiza um usuário: PATCH(só um valor) ou PUT(objeto inteiro)
 *
 * Se o seu controller faz mais do que esse métodos, é possível
 * que você esteja fazendo mais do que o padrão nesse controller e deveria criar
 * outro controller para esses métodos extras
 */
