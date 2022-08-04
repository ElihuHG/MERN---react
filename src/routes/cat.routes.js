const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jsonwt = require('jsonwebtoken')
const {expressjwt : jwt} = require('express-jwt')
const User = require('../models/User')
const Cat = require('../models/Cat')


const validateJwt = jwt({ secret: 'string-secreto', algorithms: ['HS256'] })
const signToken = _id => jsonwt.sign({ _id }, 'string-secreto')

findAndAssingUser = async ( req, res, next) =>{
    try{
        const user = await User.findById(req.auth._id)
        if(!user){
            return res.status(401).end()
        }
        req.user = user
        next()
    }catch(e){
        next(e)
    }
}

const isAuth = express.Router().use(validateJwt, findAndAssingUser)

router.get('/api/cats', async (req, res) => {
    const cat = await Cat.find()
   
    res.status(200).send(cat)
})

router.post('/api/cats', isAuth, async (req, res) => {
    const cat = new Cat(req.body)
    const savedCat = await cat.save()
    console.log(req.user)
    res.status(201).send(savedCat._id)
})

router.get('/api/cats/:id', isAuth, async (req, res) => {
    console.log(req.params)
    const { id } = req.params
    const cat = await Cat.findOne({ _id: id })
    res.status(200).send(cat)
})

router.post('/register', async (req, res) => {
    const { body } = req
    console.log(body)
    try {
        const isUser = await User.findOne({ email: body.email })
        if (isUser) {
            return res.status(403).send('usuario ya existe')
        }
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ name: body.name, email: body.email, password: hashed, salt })
        const signed = signToken(user._id)
        res.status(201).send(signed)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

router.post('/login', async (req, res) => {
    const { body } = req

    console.log(body)
    try {
        const user = await User.findOne({ email: body.email })
        if(!user){
            res.status(403).send('usuario y/o contraseña inválida')
        }else{
            const isMatch = await bcrypt.compare(body.password, user.password)
            if(isMatch){
                const signed = signToken(user._id)
                res.status(200).send(signed)
            }else{
                res.status(403).send('usuario y/o contraseña inválida')
            }
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
})



router.get('/lele', isAuth, (req, res)=>{
    console.log('lala', req.user)
    res.send('ok')
})





module.exports = router