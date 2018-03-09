class Equipe {
  constructor (nome) {
    this.__nome = nome
    this.__atletas = []
  }

  adicione (atleta) {
    this.__atletas.push(atleta)
  }

  get nome () {
    return this.__nome
  }

  get atletas () {
    return this.__atletas
  }

  encontreAtletasComAlturmaMinima (alturaMinima) {
    var result = [];
    for (let i = 0; i < this.__atletas.length; i++) {
      if (this.__atletas[i].altura >= alturaMinima) {
        result.push(this.__atletas[i]);
      }
    }
    return result;
  }
}

export {Equipe}
