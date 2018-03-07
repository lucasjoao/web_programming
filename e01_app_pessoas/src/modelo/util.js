/**
Seleciona as pessoas cuja idade � maior que idadeLimite.
pessoas: [pessoa.Pessoa]
idadeLimite: number
retorna: [pessoa.Pessoa]
*/
function selecionaPessoas (pessoas, idadeLimite) {
  var result = []; // empty array
  for (let i = 0; i < pessoas.length; i++) { // let declara variavel no escopo global
    if (pessoas[i].idade > idadeLimite) {
      result.push(pessoas[i]); // push is to add
    }
  }
  return result
}

export {selecionaPessoas}
