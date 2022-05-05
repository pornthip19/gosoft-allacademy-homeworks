const express = require('express')
const game24solver = require('24game-solver/dist/24game-solver')

const app = express()

app.get('/:num1/:num2/:num3/:num4', (req, res) => {
    console.log(req.params)

    const numberRegex = /^[1-9]{1,1}$/

    if (!numberRegex.exec(req.params.num1)) return res.status(403).send('error')
    if (!numberRegex.exec(req.params.num2)) return res.status(403).send('error')
    if (!numberRegex.exec(req.params.num3)) return res.status(403).send('error')
    if (!numberRegex.exec(req.params.num4)) return res.status(403).send('error')

    const result = game24solver([
        parseInt(req.params.num1),
        parseInt(req.params.num2),
        parseInt(req.params.num3),
        parseInt(req.params.num4),
    ], 24)

    res.send({
        msg: result.length > 0 ? "Suceess" : "Failed",
        results: result
    })
})

app.listen(3000, () => {
    console.log('server listening')
})
