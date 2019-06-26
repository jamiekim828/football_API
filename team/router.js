const { Router } = require('express')
const Team = require('./model')
const router = new Router()

router.get('/team', function (req, res, next) {
    Team
        .findAll()
        .then(teams => {
            res.send(teams)
        })
        .catch(err => next(err))
})

router.get('/team/:id', function (req, res, next) {
    const id = req.params.id
    Team
        .findByPk(id)
        .then(team => res.send(team))
        .catch(err => next(err))
})

router.post('/team', function (req, res, next) {
    Team
        .create(req.body)
        .then(team => res.json(team))
        .catch(err => console.log(err))
})

router.put('/team/:id', function (req, res, next) {
    const id = req.params.id
    Team
        .findByPk(id)
        .then(team => team.update(req.body))
        .then(team => res.send(team))
        .catch(err => console.log(err))
})

module.exports = router