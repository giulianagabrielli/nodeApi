//importando express
const express = require('express');
const routes = express.Router();

//importando controller
const ProductController = require('./controllers/ProductController');

//rotas
routes.get('/products', ProductController.index);

//exportando routes para poder user em index.js
module.exports = routes;