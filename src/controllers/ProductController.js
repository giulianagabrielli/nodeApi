//importando mongoose
const mongoose = require('mongoose');

//importanto model Product
const Product = mongoose.model('Product');

//métodos
module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query; //desestruturação (recurso do ES6). Quando a rota não encontra o parâmetro page, vai ser = 1.
        const products = await Product.paginate({}, { page, limit: 10}); 

        return res.json(products);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};