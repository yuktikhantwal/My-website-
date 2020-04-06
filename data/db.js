const Sequelize = require('sequelize')

const db = new Sequelize('project1db','project1user','project1pass',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
})

const User = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthdate: {
        type: Sequelize.DATEONLY
    },
    bio: {
        type: Sequelize.TEXT
    },
    image: {
        type: Sequelize.STRING
    }
})

const Post = db.define('post',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING
    },
    userid: {
        type: Sequelize.INTEGER
    }
})

db.sync()
    .then(()=>console.log("Data has been synced."))
    .catch(()=>console.log("Error creating database!"))

exports = module.exports = {
    User,
    Post
}