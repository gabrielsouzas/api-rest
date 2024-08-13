import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Gabriel",
      sobrenome: "Souza",
      email: "gabriel@gmail.com",
      idade: 18,
      peso: 68,
      altura: 1.79,
    });
    res.json(novoAluno);
  }
}

// Exporta a classe já instanciada para já ter o objeto pronto
export default new HomeController();
