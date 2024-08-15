import { Router } from "express";
// Aqui já vem o objeto instanciado da classe, pronto para ser usado
import userController from "../controllers/UserController";

const router = new Router();

router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/", userController.update);
router.delete("/", userController.delete);

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
