const Router = require('express')
const Team = require('./model')
const express = require('express')
const app = express()

app.get('/team', function (req, res, next) {
    Team.findAll()
    .then(teams => {
        res.json({ teams: teams })
    }
    )
    .catch(error => next(error))
})

module.export = Router