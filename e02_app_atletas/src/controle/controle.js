function consultaInicial (res, dados) {
  res.render('index', dados)
}

function consultaPesquisaPorAltura (req, res, dados) {
  // see http://expressjs.com/pt-br/api.html
  const alturaMinima = req.query.altura_minima;
  const atletas = dados.equipe.encontreAtletasComAlturmaMinima(alturaMinima)
  const resposta = {
    nome: dados.equipe.nome,
    titulo: dados.titulo,
    alturaMinima,
    atletas
  }
  res.render('resposta', resposta)
}

export {consultaInicial, consultaPesquisaPorAltura}
