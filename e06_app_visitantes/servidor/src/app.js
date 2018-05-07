import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'publico')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'publico', 'index.html'))
})

app.get("/dados", (req, res) => {
  const dados = {
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    visitantes: [23, 32, 12, 28, 36, 19]
  }
  res.json(dados);
});

app.listen(3001, () => console.log('No ar, porta 3001'));
