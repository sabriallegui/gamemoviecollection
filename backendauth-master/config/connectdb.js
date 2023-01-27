const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://azerty:azerty@cluster0.l0fdmdo.mongodb.net/appStoreDev?retryWrites=true&w=majority')
        console.log('you are connected to the db ')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectdb