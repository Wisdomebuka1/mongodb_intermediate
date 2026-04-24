const {createBook, getBookWithAuthor, getBookById } = require('../controllers/bookController')
const express  = require('express')
const router = express.Router()

router.post('/create', createBook)
router.get('/get', getBookWithAuthor)
router.get('/get/:id', getBookById)


module.exports = router;
