const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gmth99:Gmth99.@gmth.ayzty.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB Connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB