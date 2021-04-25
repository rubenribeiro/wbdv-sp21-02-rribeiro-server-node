const mongoose = require('mongoose');
const config = require('config');

const localDb = config.get('mongoLocalURI');

const mongoDb = process.env.MONGODB_URI || 'mongodb://localhost:27017/whiteboard-02';

const connectDB = async () => {

    try {
        await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;