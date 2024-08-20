/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required"],
    });
  }

  // Pega apenas o token (Bearer TOKEN)
  const [, token] = authorization.split(" ");

  try {
    // Verifica se o token é válido, fazendo a comparação hash com o TOKEN_SECRET
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // Atrelar os dados na requisição
    const { id, email } = dados;

    // Verifica se os dados do usuário ainda são os mesmos que do token gerado na autenticação
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuário inválido"],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
