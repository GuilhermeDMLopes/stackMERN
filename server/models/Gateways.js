const mongoose = require('mongoose')

const GatewaysSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true
    },
    registeredUsers: {
        type: String,
        required: true
    },
    ipV4: {
        type: String,
        required: true
    },
})

const Gateways = mongoose.model('gateways', GatewaysSchema)

module.exports = Gateways