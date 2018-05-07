import React, { Component } from 'react';
import {Panel} from 'primereact/components/panel/Panel'
import {Button} from 'primereact/components/button/Button'
import {Chart} from 'primereact/components/chart/Chart'

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
    let content;

    if (this.state.exibindo === false) {
      // about bind: https://goo.gl/pijUSq
      content = <Button icon="fa-check" onClick={this.obtenhaDados.bind(this)}/>
    } else {
      let data = {
        labels: this.state.meses,
        datasets: [
          {
            label: 'Visitantes',
            data: this.state.visitantes
        }]
      }
      content = <Chart type="line" data={data} />
    }

    return (
      <Panel header='Visitantes'>
        <div>{content}</div>
      </Panel>
    );
  }
}

export default App;
