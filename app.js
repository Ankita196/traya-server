const mongoose = require('mongoose')
const express = require('express')
const cors = require("cors");

const app = express()
const PORT = 3001
const mongoUrl = 'mongodb+srv://muskanmakde1999:TRxe4cvST4bubBkW@cluster0.qzsg9aw.mongodb.net/?retryWrites=true&w=majority';
const order = require('./routes/order')

app.use(express.json());
app.use(cors());

app.use("/user", order);
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("connected to mongo yeah1h")
})

mongoose.connection.on('error', (err) => {
    console.log("this is error", err)
})

app.listen(PORT, () => {
    console.log("server running " + PORT)
})