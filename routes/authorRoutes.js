const {createAuthor} = require('../controllers/authorController')
const express = require('express')
const router = express()


router.post('/add', createAuthor)

module.exports = router
