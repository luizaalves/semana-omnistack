const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },//qual usuario solicitou a reserva
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }//qual spot ele solicitou a reserva
});
 
// exportar o modulo daqui de dentro
module.exports = mongoose.model('Booking', BookingSchema);