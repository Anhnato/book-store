const express = require("express")
const dotenv = require('dotenv')
const mongoose  = require("mongoose")
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello World, ')
})

mongoose.connect(`mongodb+srv://lttd:${process.env.MONGO_DB}@cluster0.t2ag0u3.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connect DB sucess')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})