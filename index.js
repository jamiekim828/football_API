const teamRouter = require('./team/router')
const sequelize = require('./db')
const Team = require('./team/model')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listening on port ${port}`))
app.use(teamRouter, function(req, res, next) {
    res.send('Hello World')
})