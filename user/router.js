const { Router } = require('express')
const User = require('./model')
const router = new Router()
const bcrypt = require('bcrypt')

router.post('/user', function (req, res, next) {
    // is this getting called
    // do I have the right data??
    // what does bcrypt need / do / work
    console.log(bcrypt.hashSync(req.body.password, 10))
    console.log('PASSWORD', req.body.password)
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    User
        .create(req.body)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

module.exports = router