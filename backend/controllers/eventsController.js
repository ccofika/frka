const Events = require('../models/eventsModel')
const mongoose = require('mongoose')

const getEventGlavna = async (req, res) => {
    const events = await Events.find({}).sort({createdAt:-1}).limit(1)

    res.status(200).json(events)
}

const getEvents = async (req, res) => {
    const events = await Events.find({})

    res.status(200).json(events)
}

const getEvent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'doslo je do greske, ovog eventa nema'})
        
    }

    const event = await Events.findById(id)

    if(!event){
        return res.status(404).json({error: 'doslo je do greske'})
    }

    res.status(200).json(event)
}

const createEvent = async (req, res) => {
    const {title, date, description, price} = req.body

    try{
        const events = await Events.create({title, date, description, price})
        res.status(200).json(events)
    }catch(error) {
        res.status(400).json({error: "alo ba"})
    }
}

module.exports = {
    createEvent,
    getEvent,
    getEventGlavna,
    getEvents
}