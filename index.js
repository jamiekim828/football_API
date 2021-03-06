const express = require('express')
const sequelize = require('./db')
const db = require('./db')
const team = require('./team/model')
const player = require('./player/model')
const user = require('./user/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const loginRouter = require('./auth/router')
const userRouter = require('./user/router')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const app = express()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.use(loginRouter)
app.use(userRouter)