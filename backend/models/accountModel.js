const mongoose = require('mongoose')

const Schema = mongoose.Schema

const accountsSchema = new Schema({
    username: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Accounts', accountsSchema)