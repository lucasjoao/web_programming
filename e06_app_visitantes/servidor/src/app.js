import express from 'express';

const app = express();

app.get("/dados", (req, res) => {
  const dados = {
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    visistantes: [23, 32, 12, 28, 36, 19]
  }
  res.json(dados);
});

app.listen(3001, () => console.log('No ar, porta 3001'));
