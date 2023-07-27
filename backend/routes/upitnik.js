const express = require('express')
const {
    createUpitnik
} = require('../controllers/upitnikController')

const router = express.Router()

router.post('/', createUpitnik)


module.exports = router