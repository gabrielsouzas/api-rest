import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from "../models/Foto";

const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        if (e.name === "SequelizeForeignKeyConstraintError") {
          return res.status(400).json({
            errors: ["Aluno não existe ou ID inválido"],
          });
        }

        return res.status(400).json({
          errors: ["Ocorreu um erro ao processar a requisição"],
        });
      }
    });
  }
}

export default new FotoController();
