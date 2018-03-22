import React from 'react'

class BotaoDetalhes extends React.Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.onClick(this.props.id)
  }

  render () {
    let conteudo =
      <button
        className='button is-small is-rounded is-primary'
        onClick={this.onClick}>
        Detalhes
      </button>

    return conteudo
  }
}

export {BotaoDetalhes}
