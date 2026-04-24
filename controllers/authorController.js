const Author = require('../models/Author')

const createAuthor = async(req, res)=>{
try{
    const authorDetails = req.body;
    const {name, biography, year} = authorDetails

    if(!name || !biography || !year){
         return res.status(400).json({
            success: false,
            message: 'name, biography and year must not be empty!',

         })
    }


    const newAuthor = await Author.create({
        name,
        biography,
        year
    })

    return res.status(201).json({
           success: true,
           message: newAuthor 
    })
 }catch(error){
    console.log(error)
    res.status(500).json({
       success: false,
       message:`something went wrong! server error: ${error.message}`,
    })


 }

}

module.exports = {createAuthor}