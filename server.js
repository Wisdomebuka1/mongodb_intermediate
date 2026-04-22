require('dotenv').config()
const express = require('express')
const app = express()
const {connectDatabase} = require('./database/db')
const productRoutes = require('./routes/productsRoutes')
connectDatabase()

const PORT = process.env.PORT || 3000


app.use(express.json())

app.use('/products', productRoutes)

app.listen(process.env.PORT, ()=>{
     console.log(`server is running at: ${process.env.PORT}`)
})



