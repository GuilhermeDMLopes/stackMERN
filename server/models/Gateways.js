const mongoose = require('mongoose')

const GatewaysSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    serialNumber: {
        type: String,
        required: true
    },
    registeredUsers: {
        type: Array,
        required: false
    },
    ipV4: {
        type: Object,
        required: false
    },
})

const Gateways = mongoose.model('gateways', GatewaysSchema)

module.exports = Gateways