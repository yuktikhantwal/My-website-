const express = require('express')
const { db } = require('./data/db')
const apiRoute = require('./routes/api').route
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.set('views',__dirname+'/views')

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',apiRoute)

app.listen(7777, () => {
    console.log('started on http://localhost:7777')
})