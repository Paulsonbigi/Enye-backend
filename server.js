const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const config = require("config")

// initialize express to a variable
const app = express()

// bodyparser middleware
app.use(express.json())

// Db config
const db = config.get("mongoURI")

// connect to mongoDB
mongoose
    .connect(db, {
        useCreateIndex: true,
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("mongoDB connect"))
    .catch(err => console.log("mongoDB unable to connect"))

// api routes
app.get("/", (req, res) => {
    res.send("Hello")
})
app.use('/api/rates', require("./routes/rates"))

// variable for port
const port = process.env.PORT || 5020

app.listen(port, () => {
    console.log(`Serve started on port ${port}`)
})

