class Pessoa {
  constructor (nome, idade) {
    this.__nome = nome
    this.__idade = idade
  }

  get idade () {
    return this.__idade
  }

  get nome () {
    return this.__nome
  }
}

export {Pessoa}
