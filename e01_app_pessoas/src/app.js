import http from 'http'
import {atendeRequisicao} from './controle/controle'

const porta = 3000
const servidor = http.createServer(atendeRequisicao)

servidor.listen(porta)

console.log(`Servidor no ar escutando na porta ${porta}...`)
