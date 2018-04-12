import React, {Component} from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class LivrosEncontrados extends Component {

  __monteTabela(livros) {
    const linhas = this.__monteLinhas(livros)
    return <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Num</TableHeaderColumn>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Título</TableHeaderColumn>
          <TableHeaderColumn>Autor</TableHeaderColumn>
          <TableHeaderColumn>Páginas</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {linhas}
      </TableBody>
      </Table>
  }

  __monteLinhas (livros) {
      return livros.map( (livro, indice) => (
        <TableRow key={indice}>
        <TableRowColumn>{indice+1}</TableRowColumn>
        <TableRowColumn>{livro._id}</TableRowColumn>
        <TableRowColumn>{livro.titulo}</TableRowColumn>
        <TableRowColumn>{livro.autor}</TableRowColumn>
        <TableRowColumn>{livro.paginas}</TableRowColumn>
        </TableRow>
      ) )
  }

  render() {
    let conteudo

    if (this.props.livros !== undefined)
      if (this.props.livros.length === 0)
      conteudo = <h3>Nenhum livro encontrado</h3>
    else
      conteudo =  this.__monteTabela(this.props.livros)

    return (<div>{conteudo}</div>)
  }
}

export default LivrosEncontrados
