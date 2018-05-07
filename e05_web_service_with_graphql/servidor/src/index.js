import express from 'express'
import cors  from 'cors'

import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema  from './apollo'


const app = express()

app.use(cors())

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3001, () => {
  console.log('Vá para http://localhost:3001/graphiql para executar consultas!')
})
