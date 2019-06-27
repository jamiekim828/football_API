const { Router } = require('express')
const Team = require('./model')
const router = new Router()

router.get('/team', (req, res, next) => {
    const limit = req.query.limit || 6
    const offset = req.query.offset || 3
    Team
        .count()
        .then(total =>
            Team
                .findAll({ limit, offset })
                .then(team => res.send({ team, total }))
        )
        .catch(error => next(error))
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