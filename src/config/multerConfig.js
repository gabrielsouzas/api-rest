import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPG."));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // eslint-disable-next-line no-undef
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    // Gera um novo nome para o arquivo para evitar problemas com nomes com caracteres ruins para aplicações
    // O extname vai extrair só o formato do arquivo (.png, .jpg)
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
