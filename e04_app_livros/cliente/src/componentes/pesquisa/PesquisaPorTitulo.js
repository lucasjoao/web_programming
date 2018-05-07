import React from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton'

import LivrosEncontrados from './LivrosEncontrados';
import servicos from '../../servicos/servicos'
import FalhaNaConexao from '../util/FalhaNaConexao'

class PesquisaPorTitulo extends React.Component {
  state = {
    pesquisando: false,
    livros: undefined,
    tituloLivro : undefined,
    erroTitulo: undefined,
    falhaNaConexao: false
  }

  pesquisePorTitulo = () => {
    servicos.pesquisePorTitulo(this.state.tituloLivro)
      .then((resposta) => this.__registreResposta(resposta))
      .catch(() => this.__registreFalhaNaConexao())

    const novoEstado = {
      pesquisando: true,
      livro: undefined
    }

    this.setState(prevState => (novoEstado))
  }

  altereTitulo = (event, value) => {
    if (value === '') {
      this.setState(prevState => ({erroTitulo: 'Campo obrigatório'}))
    } else {
      const newState = {
        erroTitulo: undefined,
        tituloLivro: value,
        livros: undefined
      }
      this.setState(prevState => (newState));
    }
  }

  __registreResposta = (livros) => {
    const novoEstado = {
        pesquisando: false,
        livros
    }

    this.setState(prevState => (novoEstado))
  }

  __registreFalhaNaConexao = () => {
    this.setState(prevState => ({falhaNaConexao: true}))
  }

  __naoPodePesquisar = () => {
    return this.state.tituloLivro === undefined ||
           this.state.pesquisando ||
           this.state.erroTitulo !== undefined
  }

  render () {
    if (this.state.falhaNaConexao) {
      return (
        <FalhaNaConexao
          rotuloBotao = 'Encerrar Pesquisa'
          onCancele = {this.props.onCancele}/>
      )
    }

    let livros;

    if (this.state.livros === null) {
      livros = [];
    } else if (this.state.livros !== undefined) {
      livros = this.state.livros;
    }

    return (
      <Paper>
        <Card>
          <CardText>
            <TextField
              hintText='Digite o título do livro'
              floatingLabelText='Digite o título do livro'
              errorText={this.state.erroTitulo}
              onChange={this.altereTitulo}/>
          </CardText>

          <CardActions>
            <RaisedButton
                label='Pesquisar'
                onClick={this.pesquisePorTitulo}
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

export default PesquisaPorTitulo
