const mongoose = require('mongoose')
const { userDB } = require('../database')

const User = userDB.model('User',{
    name:{ type: String, required: true},
    email:{ type: String, required: true},
    password:{ type: String, required: true},
    salt:{ type: String, required: true },
})

module.exports = User