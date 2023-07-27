const express = require('express')
const {
    createAccount
} = require('../controllers/signupController')

const router = express.Router()

router.post('/', createAccount)

module.exports = router