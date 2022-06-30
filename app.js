const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const User = require('./models/user')
const addUserRoutes = require('./routes/addUser')
const deleteUserRoutes=require('./routes/deleteUser')
dotenv.config();
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
    res.send("Home")

})
app.use('/users',addUserRoutes,deleteUserRoutes);

mongoose.
    connect(process.env.MONGO_URI)
    .then(result => {
        console.log("running on port 3000")
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
//Connection to Mongo