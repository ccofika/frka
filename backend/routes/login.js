const express = require('express')
const {
    createAccount
} = require('../controllers/loginController')

const router = express.Router()

router.post('/', createAccount)

module.exports = router