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
    return this.__atletas.filter(a => a.altura >= alturaMinima);
  }
}

export {Equipe}
