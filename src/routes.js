//importando express
const express = require('express');
const routes = express.Router();

//importando controller
const ProductController = require('./controllers/ProductController');

//rotas
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//exportando routes para poder user em index.js
module.exports = routes;