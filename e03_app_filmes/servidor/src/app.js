import express from 'express'

const app = express()

app.use(express.static('servidor/publico'))

app.listen(3000, () => console.log('No ar, porta 3000'))
