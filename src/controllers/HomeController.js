class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

// Exporta a classe já instanciada para já ter o objeto pronto
export default new HomeController();
