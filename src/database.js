const mongoose = require('mongoose')

const catDB = mongoose.createConnection('mongodb+srv://Root:5AL0mqPtXxEshUKA@cluster0.p7kw5.mongodb.net/catdb?retryWrites=true&w=majority')
// .then(db => console.log('DB is connected'))
// .catch(err => console.error(err))

catDB.once('open', () => {
    console.log('connected in catDB');
});

const userDB = mongoose.createConnection('mongodb+srv://Root:5AL0mqPtXxEshUKA@cluster0.p7kw5.mongodb.net/userdb?retryWrites=true&w=majority')
// .then(db => console.log('DB is connected'))
// .catch(err => console.error(err))
catDB.once('open', () => {
    console.log('connected in userDB');
});
module.exports = { catDB, mongoose, userDB }