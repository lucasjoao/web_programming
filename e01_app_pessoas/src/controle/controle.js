import {pessoas, idadeMinima} from '../modelo/dados'
import {selecionaPessoas} from '../modelo/util'
import {montaResposta} from '../visao/paginaResposta'

function atendeRequisicao (req, res) {
  const velhas = selecionaPessoas(pessoas, idadeMinima)
  montaResposta(res, pessoas, idadeMinima, velhas)
  res.end()
};

export {atendeRequisicao}
