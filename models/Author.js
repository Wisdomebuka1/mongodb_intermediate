const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'author name must be filled'],
        trim: true,
        maxLength:[30, 'author name must be more than 30 character ']
    },
    biography:{
        type: String,
        required:[true, 'biography must be filled '],
        maxLength:[400, 'must not be more than 150 characters']

    },

    year: {
         type: Number,
         required: [true, "Publication year is required"],
         min: [1000, "Year must be atleast 1000"],
         max: [new Date().getFullYear(), "Year cannot be in the future"],
   },

    createdAt: {
    type: Date,
    default: Date.now,
   },
})

module.exports = mongoose.model('Author', authorSchema)