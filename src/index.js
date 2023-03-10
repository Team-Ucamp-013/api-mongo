const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const userRouter = require('./Routes/useroutes')
const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.get('/', (req,res)=>{
    res.send('Hola esto es mi ruta principal')
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('-----------------------')
    console.log('Base de datos conectada')
    console.log('-----------------------')
})
.catch((error)=>{
    console.error(error)
})

const PORT = 4002;
app.listen(PORT,()=>{
    console.log(`Servidor conectado al puerto ${PORT}`)
})