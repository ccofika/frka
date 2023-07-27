const express = require('express')
const {
    createOdeca,
    getOdeca,
    getJednoOdelo,
    deleteOdeca,
    updateOdeca
} = require('../controllers/odecaController')

const router = express.Router()

router.get('/', getOdeca)

router.get('/:id', getJednoOdelo)

router.post('/create', createOdeca)

router.delete('/:id', deleteOdeca)

router.patch('/:id', updateOdeca)

module.exports = router