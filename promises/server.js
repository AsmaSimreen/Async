const express = require('express')
const app = express()
const port = 3000

app.get('/add/:num1/:num2', (req, res) => {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var sum = Number(num1) + Number(num2);
    res.json(sum);
})

app.listen(port,'localhost', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
