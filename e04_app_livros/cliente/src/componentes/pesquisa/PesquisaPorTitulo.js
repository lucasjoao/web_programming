import React from 'react'
import FalhaNaConexao from '../util/FalhaNaConexao'
import Paper from 'material-ui/Paper'
import {Card, CardText} from 'material-ui/Card/CardText';

class PesquisaPorTitulo extends React.Component {
  state = {
    pesquisando: false,
    livros: undefined,
    tituloLivro : undefined,
    erroTitulo: undefined,
    falhaNaConexao: false
  }


  render () {
    if (this.state.falhaNaConexao)
    return (
      <FalhaNaConexao
        rotuloBotao = 'Encerrar Pesquisa'
        onCancele = {this.props.onCancele}/>
    )

    return (
      <Paper>
        <Card>
          <CardText>
          </CardText>
        </Card>
      </Paper>
    )
  }
}

export default PesquisaPorTitulo
