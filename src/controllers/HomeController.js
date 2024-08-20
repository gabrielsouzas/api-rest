class HomeController {
  async index(req, res) {
    res.json("Index");
  }
}

// Exporta a classe já instanciada para já ter o objeto pronto
export default new HomeController();
