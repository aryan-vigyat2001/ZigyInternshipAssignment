const express = require('express')
const router = express.Router();
const User = require('../models/user')


//Add user route
router.post('/addUser', async (req, res, next) => {
    const userData = req.body;
    console.log(userData)
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    newUser.save()
        .then(result => {
            console.log(result)
            res.json({ status: 200 })
        })
        .catch(err => {
            console.log(err)
            res.json({ status: 400 })
        })


})
module.exports = router;
