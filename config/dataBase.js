const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(`This is mongo db error: ${error}`);
        process.exit
    }
}

module.exports = connectDatabase