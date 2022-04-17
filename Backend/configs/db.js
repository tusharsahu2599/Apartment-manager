const mongoose = require('mongoose')
require("dotenv").config();

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

module.exports = () => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}