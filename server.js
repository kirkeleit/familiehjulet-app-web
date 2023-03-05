require('dotenv').config()
const express = require('express')
const cookie = require("cookie-parser")
const budsjettRouter = require('./routes/budsjett')
const loginRouter = require('./routes/login')
const app = express()

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookie())

app.use('/login', loginRouter)

app.use('/budsjett', budsjettRouter)

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(5000)
