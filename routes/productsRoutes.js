const {insertProduct, getProductsStats, getProductAnalysis} = require('../controllers/productsController')
const express = require('express')
const router = express.Router()

router.post('/add', insertProduct)
router.get('/stats', getProductsStats)
router.get('/analysis', getProductAnalysis)



module.exports = router;
