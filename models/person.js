const mongosse = require('mongoose');

//criano o que a api vai pegar do servidor
const carro = mongosse.model('carros', {
    name: String,
    valor: Number,
    marca: String,
    ano: Number,
    url: String,
})

module.exports = carro;