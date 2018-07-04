##### App Multas

O arquivo ine546-app_multas-exercicio.zip contém uma aplicação que permite ao usuário cadastrar e pesquisar proprietários de veículos, seus veículos e multas para os veículos.

O objetivo deste exercício é fazer uma atualização da aplicação de modo que também seja possível:

- Exibir todos os proprietários cadastrados.
- Para um proprietário, mostrar um gráfico com a pontuação acumulada das multas para cada um dos seus veículos.

Para resolver este exercício é preciso:

1. Baixar o arquivo ine5646-app_multas-exercicio.zip
1. Descompactar o arquivo
1. Abra um terminal e entre no diretório criado (ine5646-app_multas-exercicio)
1. Execute npm install para baixar e instalar todos os pacotes npm utilizados pela aplicação.
1. Criar uma base de dados MongoDB (por exemplo em https://mlab.com/)
1. Definir a variável de ambiente APP_MULTAS_DB cujo valor deve ser a URL que dá acesso à base de dados criada. Por exemplo: APP_MULTAS_DB=mongodb://detran:senhadetran@ds263950.mlab.com:63950/bd_multas
1. Coloque o lado servidor da aplicação no ar digitando npm run s. Deverá aparecer a mensagem "Conectou no banco...".
1. Abra outro terminal e digite npm run c para colocar o lado cliente no ar.
1. Utilize a aplicação para compreender como ela funciona.
1. Analise o código fonte, tanto do lado cliente como do lado servidor.
1. Implemente as duas funcionalidades solicitadas.

##### Dicas

Consulte a documentação PrimeReact sobre como usar o componente Chart. Veja que para usá-lo é necessário instalar mais um módulo NPM (relativo à biblioteca Charts.js).
