const sequelize = require('./db')
const team = require('./team/model')
const express = require('express')
const db = require('./db')
const app = express()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`))

const teamRouter = require('./team/router')
app.use(teamRouter, function(req, res, next) {
    res.send('Hello World')
})