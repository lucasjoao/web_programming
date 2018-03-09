class Atleta {
  constructor (nome, altura) {
    this.__nome = nome
    this.__altura = altura
  }

  get nome () {
    return this.__nome
  }

  get altura () {
    return this.__altura
  }
}

export {Atleta}
