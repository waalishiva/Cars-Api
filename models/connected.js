const mongoose = require('mongoose')
const connectedSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('CONNECTED', connectedSchema)