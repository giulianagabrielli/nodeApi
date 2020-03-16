//importando express
const express = require('express');
//importando mongoose
const mongoose = require('mongoose');
//importando require-dir
const requireDir = require('require-dir');

//iniciando o App (executando o express)
const app = express();
app.use(express.json()); //para permitir que os dados sejam enviados para a aplicação em formato json

//inicializando o DB (nodeapi é o nome da DB)
mongoose.connect (
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true } 
);

//chamando o model Product
// require('./src/models/Product') 
//NÃO É MAIS NECESSÁRIO CHAMAR UM MODEL DE CADA VEZ COM O REQUIRE-DIR

//chamando todos os models
requireDir('./src/models');

// const Product = mongoose.model('Product');
//ESSE CÓDIGO FOI PARA PRODUCT CONTROLLER

//rotas
app.use('/api', require('./src/routes'));

//porta 3001
app.listen(3001);