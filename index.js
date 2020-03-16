//importando express
const express = require('express');
//importando mongoose
const mongoose = require('mongoose');
//importando require-dir
const requireDir = require('require-dir');

//iniciando o app (executando o express)
const app = express();

//inicializando o db (nodeapi é o nome da DB)
mongoose.connect (
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true } 
);

//chamando o model Product
require('./src/models/Product')


//rotas
app.get('/', (req, res)=>{
    res.send('Hello, giu');
});

//porta 3001
app.listen(3001);