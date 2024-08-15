import User from "../models/User";

class TokenController {
  async index(req, res) {
    res.json("OK");
  }
}

// Exporta a classe já instanciada para já ter o objeto pronto
export default new TokenController();
