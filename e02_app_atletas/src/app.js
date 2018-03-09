import express from 'express'
import {dados} from './modelo/dados'
import {consultaInicial, consultaPesquisaPorAltura} from './controle/controle'

const app = express()

app.set('view engine', 'pug')

app.get(
  '/',
  (req, res) => consultaInicial(res, dados)
)

app.get(
  '/pesquisePorAltura',
  (req, res) => consultaPesquisaPorAltura(req, res, dados)
)

app.listen(3000, () => console.log('No ar, porta 3000...'))
