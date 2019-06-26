const express = require('express')
const sequelize = require('./db')
const db = require('./db')
const team = require('./team/model')
const player = require('./player/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express()
app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`))