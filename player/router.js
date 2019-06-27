const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')
const router = new Router()

router.get('/player', function (req, res, next) {
    Player
        .findAll()
        .then(players => {
            res.send(players)
        })
        .catch(err => next(err))
})

router.get('/player/:id', function (req, res, next) {
    const id = req.params.id
    Player
        .findByPk(req.params.id, { include: [Team] })
        .then(player => res.send(player))
        .catch(err => next(err))
})

router.post('/player', function (req, res, next) {
    Player
        .create(req.body)
        .then(player => res.json(player))
        .catch(err => console.log(err))
})

router.put('/player/:id', function (req, res, next) {
    const id = req.params.id
    Player
        .findByPk(id)
        .then(player => player.update(req.body))
        .then(player => res.send(player))
        .catch(err => console.log(err))
})

module.exports = router