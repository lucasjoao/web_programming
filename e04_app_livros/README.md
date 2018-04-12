# app_livros

A aplicação para web deste exercício permite que o usuário cadastre e pesquise livros. Para simplificar, um livro é caracterizado apenas pelo seu título, seu autor e o número de páginas.

Os livros são armazenados em um banco de dados MongoDB.

A aplicação utiliza também a biblioteca Mongoose para simplificar as operações que envolvem o MongoDB.

## Execução

1. `npm install` no diretório raiz da aplicação
2. `npm install` em `cliente/`
3. `export` para criar uma variável ambiente com o seguinte template `MONGODB_LIVROS=url`
4. em uma janela no diretório raiz da aplicação
    1. `npm run bin`
    2. `npm run run`
5. em outra janela em `cliente/`
    1. `npm start`
