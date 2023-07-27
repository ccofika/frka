const mongoose = require('mongoose')

const Schema = mongoose.Schema

 const upitnikSchema = new Schema({
    muzika: { 
        type: String,
        required: true
    },
    mesto: {
        type: String,
        required: true
    },
    vreme: {
        type: String,
        required: true
    },
    datumi: {
        type: String,
        required: true
    },
    merch: {
        type: String,
        required: true
    },
    gosti: {
        type: String,
        required: true
    }
 }, { timestamps: true })

 module.exports = mongoose.model('Upitnik', upitnikSchema)