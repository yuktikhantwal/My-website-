const User = require('../../data/db').User
const route = require('express').Router()

route.post('/signup',(req,res)=>{
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
        bio: req.body.bio,
        image: req.body.image
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add new user!"
        })
    })
})

route.post('/login',(req,res)=>{
    User.findOne({
        where: {
            username: req.body.username_
        }
    }).then((user)=>{
        if(user.password==req.body.password_){
            req.session.username = user.username
            req.session.save()
            res.render('profilepage',{user})
        }
        else 
        res.status(501).send({
            error: "Password is incorrect!"
        })
    }).catch((err)=>{
        res.status(501).send({
            error: "No such user found!"
        })
    })
})

exports = module.exports = route