import React, { Component } from 'react'

import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormCadastro extends Component {
  state = {
    titulo: undefined,
    erroTitulo: undefined,
    autor: undefined,
    erroAutor: undefined,
    paginas: undefined,
    erroPaginas: undefined,
  }

  podeCadastrar () {
    const s = this.state
    return s.erroTitulo === undefined &&
      s.erroAutor === undefined &&
      s.erroPaginas === undefined &&
      s.titulo !== undefined &&
      s.autor !== undefined &&
      s.paginas !== undefined
  }

  altereTitulo = (ev, valor) => {
    if (valor === '') {
      this.setState(prevState => ({erroTitulo: 'Campo obrigatório'}))
    } else {
      this.setState(prevState => ({titulo: valor, erroTitulo: undefined}))
    }
  }

  altereAutor = (ev, valor) => {
    if (valor === '') {
      this.setState(prevState => ({erroAutor: 'Campo obrigatório'}))
    } else {
      this.setState(prevState => ({autor: valor, erroAutor: undefined}))
    }
  }

  alterePaginas = (ev, valor) => {
    if (valor > 0) {
      this.setState(prevState => ({paginas: valor, erroPaginas: undefined}))
    } else {
      this.setState(prevState => ({erroPaginas: 'Tem que ser número maior que zero'}))
    }
  }

  facaCadastro = () => {
    const dados = {
      titulo: this.state.titulo,
      autor: this.state.autor,
      paginas: this.state.paginas
    }
    this.props.onCadastre(dados)
  }

  render () {
    return (
      <Card>
          <CardText>
          <TextField
            hintText='digite o título'
            floatingLabelText='Título'
            errorText={this.state.erroTitulo}
            onChange={this.altereTitulo}/>
        <br/>
          <TextField
            hintText='digite o autor'
            floatingLabelText='Autor'
            errorText={this.state.erroAutor}
            onChange={this.altereAutor}/>
        <br/>
          <TextField
            hintText='digite o número de páginas'
            floatingLabelText='Páginas'
            errorText={this.state.erroPaginas}
            onChange={this.alterePaginas}/>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Cadastrar"
            disabled={!this.podeCadastrar()}
            onClick={this.facaCadastro}/>

          <RaisedButton
            label="Cancelar"
            onClick={this.props.onCancele}/>
        </CardActions>
      </Card>
    )
  }
}

export default FormCadastro
