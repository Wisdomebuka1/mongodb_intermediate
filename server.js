require('dotenv').config()
const express = require('express')
const app = express()
const {connectDatabase} = require('./database/Database')
const productRoutes = require('./routes/productsRoutes')
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')

connectDatabase()


const PORT = process.env.PORT || 3000


app.use(express.json())

app.use('/products', productRoutes)
app.use('/author', authorRoutes)
app.use('/book', bookRoutes)



app.listen(process.env.PORT, ()=>{
     console.log(`server is running at: ${process.env.PORT}`)
})



