//importando mongoose
const mongoose = require('mongoose');

//importanto model Product
const Product = mongoose.model('Product');

//exportando um objeto
module.exports = {
    async index(req, res) {
        const products = await Product.find(); //dentro de find() poderia ter {where}

        return res.json(products);
    }
};