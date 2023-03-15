const express = require('express')
const router = express.Router()
const cookieParser = require("cookie-parser")

router.get('/', (req, res) => {
    console.log(req.cookies)
    fetch(process.env.BASE_API_URL+"/budget/expenses", {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+req.cookies['ACCESS_TOKEN']
      }
    })
    .then(response => response.json())
    .then(data => {
            console.log(data.resExpenses)
            res.render('budsjett/index', { expenses: data.resExpenses })
    })
})

router.get('/nyutgift', (req, res) => {
    res.render('budsjett/nyutgift')
})

router.post('/', (req, res) => {

})

module.exports = router