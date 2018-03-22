/**
Seleciona as pessoas cuja idade � maior que idadeLimite.
pessoas: [pessoa.Pessoa]
idadeLimite: number
retorna: [pessoa.Pessoa]
*/
function selecionaPessoas (pessoas, idadeLimite) {
  return pessoas.filter(p => p.idade > idadeLimite);
}

export {selecionaPessoas}
