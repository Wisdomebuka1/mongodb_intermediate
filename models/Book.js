const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
     title:{
        type:String,
        required: [true, 'book title is required'],
        trim: true,
        maxLength:[100, "Book title can not be more than 100 characters"],
     },
  
     author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
     }
})

module.exports = mongoose.model('Book', bookSchema)