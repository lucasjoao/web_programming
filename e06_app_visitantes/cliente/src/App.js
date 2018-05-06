import React, { Component } from 'react';
import {Panel} from 'primereact/components/panel/Panel'
import {Button} from 'primereact/components/button/Button'
import { Chart } from 'primereact/components/chart/Chart'

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

// imports and obtenhaDados from step by step

class App extends Component {
  state = {
    meses: undefined,
    visitantes: undefined,
    exibindo: false
  }

  obtenhaDados() {
    fetch('/dados')
      .then(r => Promise.resolve(r))
      .then(r => r.json())
      .then(({meses, visitantes}) => {
        this.setState({meses, visitantes, exibindo: true})
      })
  }

  render() {
    return (
      <Panel>
        Número de visitantes no site.
      </Panel>
    );
  }
}

export default App;
