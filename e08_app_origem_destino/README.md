### App Origem Destino

Desenvolver uma aplicação para web que permita ao usuário descobrir a distância e o tempo de viagem entre duas cidades informadas por ele.

Veja um exemplo de como deve ficar a aplicação depois de pronta:

http://origemdestino.leandro.komosinski.vms.ufsc.br:3004/

##### Requisitos Não Funcionais

A aplicação deve ter os seguintes requisitos não funcionais:

- Utilizar apenas o protocolo HTTPS na comunicação entre o lado cliente e o lado servidor. Requisições HTTP devem ser automaticamente redirecionadas para HTTPS.
- Somente usuários devidamente autenticados podem usar a aplicação. Utilizar o protocolo OAuth 2 com o fluxo de permissão implícito  (implicit grant flow).
- Utilizar a API Distance Matrix (https://developers.google.com/maps/documentation/distance-matrix), webservice do Google que calcula a distância e o tempo de viagem entre duas cidades.


#### Dicas

##### Para o lado servidor

##### Gerar Certificado Autoassinado

A comunicação entre cliente e servidor via HTTPS implica em que este forneça um certificado de autenticidade. A aplicação deve ser capaz de provar para o usuário que é legítima. Este certificado, para ter validade, precisa ser assinado por alguma Autoridade Certificadora (equivalente ao conceito de cartório onde levamos nossos documentos para serem autenticados).

Para fins didáticos, no entando, neste exercício a aplicação apresentará um certificado assinado por ela mesma (pelo desenvolvedor da aplicação). O browser vai alertar sobre este problema mas o aviso pode ser ignorado. Para gerar um certificado autoassinado basta digitar:

```bash
openssl req -x509 -days 365 -nodes -newkey rsa:1024  -keyout key.pem -out cert.pem
```

Serão feitas várias perguntas. Responda usando o bom senso. Os dados informados não afetarão o funcionamento da aplicação.

Como resultado serão gerados dois arquivos: key.pem e cert.pem. O conteúdo dos  arquivos será lido quando a aplicação for colocada no ar. A localização dos arquivos depende apenas do algoritmo usado para lê-los. Por exemplo, podem ficar dentro do diretório src, junto com os demais arquivos JavaScript.

##### Bibliotecas Úteis

Usar as seguintes bibliotecas JavaScript:

- express (http://expressjs.com/)
- encodeurl (https://www.npmjs.com/package/encodeurl) : necessária para codificar a URL que será enviada para o serviço Distance Matrix.
- node-fetch (https://www.npmjs.com/package/node-fetch) : versão para o lado servidor da API fetch existente no lado cliente. Usada para acessar o serviço Distance Matrix.
- helmet (http://expressjs.com/en/advanced/best-practice-security.html) : para inserir cabeçalhos de segurança. Em particular, cabeçalhos CSP (Content-Security Police).

##### Exemplo de servidor

O arquivo app.js, mostrado a seguir, representa parte da lógica que deve ser executada no lado servidor.

```javascript
import express from 'express'
import fs from 'fs'
import https from 'https'
import http from 'http'
import path from 'path'

import fetch from 'node-fetch'

import pesquisador from './pesquisador'

import helmet from 'helmet'

const PORTA_HTTPS = 3001
const PORTA_HTTP = 3004
const msgHTTPS = `Servidor HTTPS no ar, porta ${PORTA_HTTPS}`
const msgHTTP = `Requisições HTTP porta ${PORTA_HTTP} são redirecionadas para HTTPS`

const app = express()

// Redireciona requisições HTTP para HTTPS
app.use((req, res, next) => {
  if (!req.secure) {
    const urlSegura = `https://${req.hostname}:${PORTA_HTTPS}${req.originalUrl}`
    res.redirect(urlSegura)
  } else {
    next()
  }
})

// Insere cabeçalhos de segurança
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: [
      "'self'",
      "https://apis.google.com",
      "https://accounts.google.com",
      "https://*.googleusercontent.com"
    ],
  }
}))

// Localização de conteúdo estático (index.html, CSS, JavaScript, etc)
app.use(express.static(path.join(__dirname, 'publico')))

app.get("/pesquise", (req, res) => {
    const origem = req.query.origem
    const destino = req.query.destino
    pesquisador
      .pesquise(origem, destino)
      .then(resposta => res.json(resposta))
})


// ------- Para colocar o servidor no ar -------

const key_cert = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
}

https
  .createServer(key_cert, app)
  .listen(PORTA_HTTPS, () => console.log(msgHTTPS))

http
  .createServer(app)
  .listen(PORTA_HTTP, () => console.log(msgHTTP))
```

Você precisa implementar, no arquivo pesquisador.js, a parte do código que faz a consulta HTTP ao webservice DistanceMatrix e extrai os dados relevantes do objeto JSON retornado.

##### Para o lado cliente

##### Autenticação usando Google

A página https://developers.google.com/identity/protocols/OAuth2UserAgent explica os procedimentos necessários para que uma aplicação utilize o Google como elemento que realiza a autenticação do usuário usando o fluxo de permissão implícito.

Utilize a API JavaScript fornecida pelo Google para realizar a autenticação e autorização OAuth2. No arquivo public/index.html (que foi gerado automaticamente pelo create-react-app)  adicione a linha dentro da tag HEAD

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>INE5646 App Origem Destino</title>
    <script src="https://apis.google.com/js/api.js"></script>
```

Para ter acesso a esta biblioteca no seu componente React utilize o seguinte código no arquivo src/ndex.js (gerado automaticamente pelo create-react-app).

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'

import App from './App';

ReactDOM.render(<App gapi={window.gapi}/>, document.getElementById('root'));
```

##### Uso de Componentes React

Crie componentes React para implementar o lado cliente da aplicação. Utilize a biblioteca Bulma para definir a aparência dos componentes.
