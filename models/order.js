const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    star: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
})

mongoose.model("User", userSchema)