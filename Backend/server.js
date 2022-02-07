const express = require('express')
const ConnectDB = require('./config/ConnectDB')
const ActorsRoutes = require('./routes/ActorsRoutes')
const app = express()
require('dotenv').config()
app.use(express.json())


app.use('/api/actors', ActorsRoutes)
ConnectDB()
app.listen(process.env.PORT, () => console.log(`           Port is Running on LocalHost : ${process.env.PORT}`))