const mongoose = require("mongoose")
const Schema = mongoose.Schema

const currency = new Schema({
    EUR: {
        type: Number,
        required: true
    },
    GBP: {
        type: Number,
        required: true


    },
    USD: {
        type: Number,
        required: true
    },
})

const resultSchema = new Schema({
    base: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    rates: {
        type: currency,
        required: true
    }

})

module.exports = Result = mongoose.model("result", resultSchema)