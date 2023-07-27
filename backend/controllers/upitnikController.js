const Upitnik = require('../models/upitnikModel')
const mongoose = require('mongoose')


const createUpitnik = async (req, res) => {
    const {muzika, mesto, vreme, datumi, merch, gosti} = req.body

    try{
        const upitnik = await Upitnik.create({muzika, mesto, vreme, datumi, merch, gosti})
        res.status(200).json(upitnik)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createUpitnik
}