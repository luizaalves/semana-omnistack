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
}, {
    toJSON:{
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

// exportar o modulo daqui de dentro
module.exports = mongoose.model('Spot', SpotSchema);