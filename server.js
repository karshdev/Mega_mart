const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/productModel')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())



mongoose.connect("mongodb+srv://sharmaaakarsh120:Hellobitch123@cluster0.tnldckr.mongodb.net/Node-API?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => {
        console.log("connected to mongodb")
        app.listen(3001, () => {
            console.log("Node API")
        })
    }).catch((error) => {
        console.log(error)
    })
app.post('/login', async (req, res) => {
    const { password, email } = req.body

    try {
        const find = await User.findOne({ email }).exec()
        console.log({ find })
        if (find) {
            if (password === find.password) {
                res.send({ message: "Login Successfull", find })

            } else {
                res.send({ message: "password didnt match" })
            }
        } else {
            res.send({ message: "No user Found kindly register" })
        }
    } catch (error) {
        console.log({ error })
        res.send({ message: error.message })
    }
})
app.post('/register', async (req, res) => {
    const { name, lastname, email, password } = req.body
console.log(name,lastname)
    try {
        const find = await User.findOne({ email }).exec()
        console.log({ find })
        if (find) {
            res.send({ message: "pehle he ha db m" })
        } else {
            console.log({
                name,
                lastname,
                email,
                password
            })
            const user = await User.create({
                name,
                lastname,
                email,
                password
            })
            res.send(user)
        }

    } catch (error) {
        console.log({ error })
        res.send({ message: error.message })
    }
})
