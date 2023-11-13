var express = require('express');
const path = require('path');

const app = express()

const porta = 3001

app.listen(porta, function () {
    console.log('foi');
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.get('/contato', function(req, res) {
    res.sendFile(path.join(__dirname, '/contato.html'));
  });