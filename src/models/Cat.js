const mongoose = require('mongoose')
const { catDB } = require('../database')
const Cat = catDB.model('cat',{
    catname: {type: String, required: true, minLenght: 3},
    catprice: {type: String, required: true, minLenght: 3},
    catage: {type: String, required: true, minLenght: 3},
    catdes: {type: String, required: true, minLenght: 3},
    caturl: {type: String, required: true, minLenght: 3},
})

module.exports = Cat