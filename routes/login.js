const express = require('express')
const router = express.Router()
const cookie = require("cookie-parser")

router.get('/', (req, res) => {
    res.render('login/login')
})

router.post('/', (req, res) => {
    console.log(req.body.EmailAddress)
    //res.send(req.body.EmailAddress)
    fetch(process.env.API_URL+"/users/login/", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ EmailAddress: req.body.EmailAddress })
      })
      res.render('login/requested')
})

router.get('/token/:token', (req, res) => {
    console.log(req.params.token)
    fetch(process.env.API_URL+"/users/login/"+req.params.token, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
              console.log(data)
              res.cookie('ACCESS_TOKEN', data.AccessToken)
              res.cookie('REFRESH_TOKEN', data.RefreshToken)
              res.render('login/successfull')
      })
})

router.get('/register', (req, res) => {
    res.render('login/register')
})

module.exports = router