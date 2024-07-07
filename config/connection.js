const { mongoose } = require('mongoose')

mongoose.connect('mongodb://localhost:27017/MongoNetworkdb')

module.exports = mongoose.connection