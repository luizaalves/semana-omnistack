const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
});

// exportar o modulo daqui de dentro
module.exports = mongoose.model('User', UserSchema);