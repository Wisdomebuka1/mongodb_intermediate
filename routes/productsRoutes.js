const {insertProductSchema} = require('../controllers/productsController')
const express = require('express')
const router = express.Router()

router.post('/add', insertProductSchema)


module.exports = router;
