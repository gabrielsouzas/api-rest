/* eslint-disable no-undef */
import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ["Credenciais inválidas"],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ["Usuário não existe"],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ["Senha inválida"],
        });
      }

      /**
       * Retorno do token de autenticação ao usuário
       * payload: Dados que serão recuperados depois do usuário, ou seja, para verificações posteriores será possivel ver o email e o id do usuário
       */
      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token: token, user: { nome: user.nome, id, email } });
    } catch (e) {
      return res.status(400).json({
        errors: Array.isArray(e.errors)
          ? e.errors.map((err) => err.message)
          : [e.message || "An unknown error occurred"],
      });
    }
  }
}

// Exporta a classe já instanciada para já ter o objeto pronto
export default new TokenController();
