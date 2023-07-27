const mongoose = require('mongoose')

const Schema = mongoose.Schema

 const odecaSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
 }, { timestamps: true })

 module.exports = mongoose.model('Odeca', odecaSchema)