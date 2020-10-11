const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number, 
    techs: [String], //tecnologias que a empresa trata
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } //salva apenas o id do usuário
});

// exportar o modulo daqui de dentro
module.exports = mongoose.model('Spot', SpotSchema);