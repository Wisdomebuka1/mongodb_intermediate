const {insertProduct, getProductsStat} = require('../controllers/productsController')
const express = require('express')
const router = express.Router()

router.post('/add', insertProduct)
router.get('/stats', getProductsStat)


module.exports = router;
