const Odeca = require('../models/odecaModel')
const mongoose = require('mongoose')

const getOdeca = async (req, res) => {
    const odeca = await Odeca.find({}).sort({createdAt: -1}).limit(4)

    res.status(200).json(odeca)
}



const getJednoOdelo = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no workout with that id'})
    }

    const jednoOdelo = await Odeca.findById(id)

    if(!jednoOdelo){
        return res.status(404).json({error: 'No such hoodie'})
    }

    res.status(200).json(jednoOdelo)
}

const createOdeca = async (req, res) => {
    const {title, image_url, price} = req.body

    try{
        const odeca = await Odeca.create({title, image_url, price})
        res.status(200).json(odeca)
    }catch(error) {
        res.status(400).json({error: "error.message"})
    }
}

const deleteOdeca = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no workout with that id'})
    }

    const deleteOdeca = await Odeca.findOneAndDelete(({_id: id}))

    if(!deletehoodie){
        return res.status(404).json({error: 'No such workout'})
    }
}


const updateOdeca = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no workout with that id'})
    }

    const updateOdeca = await Odeca.findOneAndUpdate({_id: id}, {

    })

    if(!updateOdeca){
        return res.status(404).json({error: 'No such workout'})
    }
}


module.exports = {
    createOdeca,
    getOdeca,
    getJednoOdelo,
    deleteOdeca,
    updateOdeca
}