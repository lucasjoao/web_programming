'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, 'publico')));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'publico', 'index.html'));
});

app.get("/dados", function (req, res) {
  var dados = {
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    visitantes: [23, 32, 12, 28, 36, 19]
  };
  res.json(dados);
});

app.listen(3001, function () {
  return console.log('No ar, porta 3001');
});