const express = require('express')
const {
    getEvent,
    getEvents,
    getEventGlavna,
    createEvent
} = require('../controllers/eventsController')

const router = express.Router()

router.get('/glavna', getEventGlavna)

router.get('/', getEvents)

router.get('/:id', getEvent)

router.post('/create', createEvent)

module.exports = router