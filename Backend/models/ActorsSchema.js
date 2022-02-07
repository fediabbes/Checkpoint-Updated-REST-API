

const mongoose = require('mongoose')


const ActorsSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    image: String,
    occupation: String,
    oscars: Number,
})


module.exports = mongoose.model('Actor', ActorsSchema)