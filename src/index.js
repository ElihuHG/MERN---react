//Aqui va el servidor
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')


const { catDB } = require('./database')


const app = express()
//settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/',require('./routes/cat.routes'))


//static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), ()=>{
    console.log(`server running at port ${app.get('port')}`)
})