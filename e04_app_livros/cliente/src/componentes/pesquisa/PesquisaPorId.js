import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField'

import FalhaNaConexao from '../util/FalhaNaConexao'
import LivrosEncontrados from './LivrosEncontrados'
import servicos from '../../servicos/servicos'

class PesquisaPorId extends React.Component {
  state = {
    pesquisando: false,
    livro: undefined,
    idLivro : undefined,
    erroID: undefined,
    falhaNaConexao: false
  }

  pesquisePorId = () => {
    servicos.pesquisePorId(this.state.idLivro)
      .then((resposta) => this.__registreResposta(resposta))
      .catch(() => this.__registreFalhaNaConexao())

    const novoEstado = {
      pesquisando: true,
      livro: undefined
    }

    this.setState(prevState => (novoEstado))
  }

  __registreResposta = (livroOuNull) => {
    const novoEstado = {
        pesquisando: false,
        livro: livroOuNull
    }

    this.setState(prevState => (novoEstado))
  }

  __registreFalhaNaConexao = () => {
    this.setState(prevState => ({falhaNaConexao: true}))
  }

  altereID = (ev, valor) => {
    if (valor === '')
      this.setState(prevState => ({erroID: 'Campo obrigatório'}))
    else {
      const novoEstado = {
        erroID: undefined,
        idLivro: valor,
        livro: undefined
      }
      this.setState(prevState => (novoEstado))
    }
  }

  __naoPodePesquisar = () => {
    return this.state.idLivro === undefined ||
           this.state.pesquisando ||
           this.state.erroID !== undefined
    }

  render () {
    if (this.state.falhaNaConexao)
      return (
        <FalhaNaConexao
          rotuloBotao = 'Encerrar Pesquisa'
          onCancele = {this.props.onCancele}/>
      )

    let livros

    if (this.state.livro === null)
      livros = []
    else
      if (this.state.livro !== undefined)
        livros = [this.state.livro]

    return (
        <Paper>
          <Card>
            <CardText>
              <TextField
                hintText='digite o ID do livro'
                floatingLabelText='ID do Livro'
                errorText={this.state.erroID}
                onChange={this.altereID}/>
            </CardText>

            <CardActions>
              <RaisedButton
                label='Pesquisar'
                onClick={this.pesquisePorId}
                disabled={this.__naoPodePesquisar()}/>
              <RaisedButton
                label='Encerrar pesquisa'
                onClick={this.props.onCancele}
                disabled={this.state.pesquisando}/>
            </CardActions>
            <CardText>
              <LivrosEncontrados livros={livros}/>
            </CardText>
          </Card>
        </Paper>
    )
  }
}

export default PesquisaPorId
