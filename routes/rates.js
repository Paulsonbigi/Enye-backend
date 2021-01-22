const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/", (req, res) => {

    const { base, currency } = req.query
    console.log(base, currency)
    
    axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`)
        .then(result => {
            const { date, base, rates} = result.data
            res.json({
                date, base, rates 
            })
        })
        .catch(err => {
            res.status(404).send("Invalid request")
        })
})

module.exports = router