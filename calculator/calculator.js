const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Router } = require('express')
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>
    res.sendFile(__dirname + "/index.html")
)

app.get('/bmicalculator', (req, res) =>
    res.sendFile(__dirname + "/bmicalculator.html")
)

app.post('/bmicalculator', function (req, res) {
    var ht = Number(req.body.height)
    var wt = Number(req.body.weight)
    var result = wt / ht ** 2
    res.send(`Your BMI is ${result}`)
})

app.post('/', function (req, res) {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 + num2
    res.send(`The result is ${result}`)
})

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)