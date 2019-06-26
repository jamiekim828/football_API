const { Router } = require('express')
const Team = require('./model')
const router = new Router()

router.get('/team', function (req, res, next) {
    Team
    .findAll()
    .then(teams => {
        res.send(teams)
    }
    )
    .catch(err => next(err))
})

router.post('/team', function (req, res, next) {
    Team
    .create(req.body)
    .then(team => res.json(team))
    .catch(err => next(err))
})

module.exports = router