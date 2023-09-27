// require('dotenv').config({path : 'backend/db/config.env'})
const express = require('express')
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(cors())

const contact = require('./routes/contactRoute')
app.use('/api', contact )

module.exports = app; 