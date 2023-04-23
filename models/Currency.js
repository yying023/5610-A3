const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema({
    currencyid : {
        type: String,
        required: true
    },
    currencyname : {
        type: String,
        required: true
    },
    abbreviation : {
        type: String,
        required: true
    }
})

const currencymodel = mongoose.model('currency', currencySchema)

module.exports = currencymodel