const Post = require('../../data/db').Post
const route = require('express').Router()

route.post('/',(req,res)=>{
    Post.create({
        body: req.body.body,
        image: req.body.image,
        userid: req.body.userid
    }).then((post)=>{
        res.status(201).send(post)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add new post!"
        })
    })
})

route.get('/myposts',(req,res)=>{
    Post.findAll({
        where: {
            userid: parseInt(req.query.userid)
        }
    }).then((posts)=>{
        res.status(201).send(posts)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not find any posts!"
        })
    })
})

route.get('/allposts',(req,res)=>{
    Post.findAll()
        .then((posts)=>{
            res.status(201).send(posts)
        })
        .catch((err)=>{
            res.status(501).send({
                error: "Could not find any posts!"
            })
        })
})

exports = module.exports = route