import React from 'react'
import {Filmoteca} from '../modelo/Filmoteca'
import {Filme} from '../modelo/Filme'
import {Cabecalho} from './Cabecalho.jsx'
import {FilmesCadastrados} from './FilmesCadastrados.jsx'
import {DetalhesFilme} from './DetalhesFilme.jsx'

class IU extends React.Component {
  constructor (props) {
    super(props)

    this.definaFilmeSelecionado = this.definaFilmeSelecionado.bind(this)
    this.definaFilmeNaoSelecionado = this.definaFilmeNaoSelecionado.bind(this)

    const filmoteca = new Filmoteca()
    filmoteca.adicioneFilme(new Filme(1, 'Um dia de fúria', 1993, 'Joel Schumacher'))
    filmoteca.adicioneFilme(new Filme(2, 'O nome da rosa', 1986, 'Jean-Jaques Annaud'))
    filmoteca.adicioneFilme(new Filme(3, 'The Wall', 1982, 'Alan Parker e Gerald Scarfe'))
    filmoteca.adicioneFilme(new Filme(4, '2001 - Uma Odisséia no Espaço', 1968, 'Stanley Kubrick'))

    this.state = {
      filmoteca: filmoteca,
      titulos: filmoteca.titulos,
      idFilmeSelecionado: undefined
    }
  }

  definaFilmeSelecionado (id) {
    this.setState(prevState => ({idFilmeSelecionado: id}))
  }

  definaFilmeNaoSelecionado () {
    this.setState(prevState => ({idFilmeSelecionado: undefined}))
  }

  render () {
    let filme

    if (this.state.idFilmeSelecionado !== undefined) {
      filme = this.state.filmoteca.retorneFilme(this.state.idFilmeSelecionado)
    }

    return (
      <div className="container is-fluid">
        <Cabecalho/>
        <div className="columns">
          <div className="column is-one-quarter">
            <FilmesCadastrados
              idFilmeSelecionado={this.state.idFilmeSelecionado}
              titulos={this.state.titulos}
              onClick={this.definaFilmeSelecionado}/>
          </div>
          <div className="column">
            <DetalhesFilme
              filme={filme}
              onClick={this.definaFilmeNaoSelecionado}/>
          </div>
        </div>
      </div>
    )
  }
}

export {IU}
