const express = require('express')
const { db } = require('./data/db')
const { User } = require('./data/db')
const apiRoute = require('./routes/api').route
const path = require('path')
const session = require('express-session')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    session({
        secret: 'qwertyuiopasdfghjklzxcvbnm',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: false,
            maxAge: 1000* 60 * 60 *24 * 365
        }
    })
)

app.set('view engine','hbs')
app.set('views',__dirname+'/views')

app.get('/',(req,res)=>{
    if(!req.session.username) {
        res.redirect('/homepage')
    }
    else{
        User.findOne({
            where: {
                username: req.session.username
            }
        }).then((user)=>{
            res.render('profilepage', { user })
        }).catch((err)=>{
            res.status(501).send({
                error: "User not found!"
            })
        })
    }

})

app.use('/homepage',express.static(path.join(__dirname,'public')))
app.use('/homepage/api',apiRoute)

app.listen(7777, () => {
    console.log('started on http://localhost:7777')
})