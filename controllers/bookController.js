const Books = require('../models/Book');
const createBook = async (req, res)=>{

    try{

        const newBookFormData = req.body;
        const {title, author} = newBookFormData
        if(!title || !author){
            return res.status(400).json({
                success: false,
                message: 'title or author must not be empty!'
            })
        }
         const newlyCreatedBook = await Books.create({
            title,
            author
         })


        return res.status(201).json({
             success: true,
             messag: newlyCreatedBook
        })

       
    }catch(error){
    res.status(500).json({
      success: false,
      message: `something went wrong! server error: ${error.message}`,
     });

    }
}

const getBookWithAuthor = async(req, res)=>{
    try {
         const books = await Books.find().populate('author')
         if(books.length === 0){
            return res.status(404).json({
               success:false,
               message: 'No books found!'
            })
         }

         return res.status(200).json({
             success: true,
             message: "book was found successfully",
             data: books
         })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message:   `something went wrong!, server error: ${error.message}`
        })
    }
}


const getBookById = async(req, res)=>{
    try {
        const bookId = req.params.id;

        const getBookId = await Books.findById(bookId).populate('author')

        if(!getBookId){
             return res.status(404).json({
                success: false,
                message: 'book not found!'
             })
        }


        return res.status(200).json({
             success: true,
             message: 'book fetched succcessfully',
             data: getBookId
        })
        

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message:   `something went wrong!, server error: ${error.message}`
        })
    }
}


module.exports = {
    createBook,
    getBookWithAuthor,
    getBookById
}