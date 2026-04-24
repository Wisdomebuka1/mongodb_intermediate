const mongoose = require('mongoose')
const connectDatabase = async (req, res)=>{
    try{
         await mongoose.connect(process.env.MONGODB_URI)
         console.log('Database connection successfully!')

    }catch(error){
        console.log('Database connection successfully!')
        process.exit(1)
    }

}


module.exports = {connectDatabase}