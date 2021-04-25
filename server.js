const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const config = require('config');
const connectDB = require('./config/db');

// const MONGODB_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/whiteboard-02';
//
// const mongoose = require('mongoose');
// // mongoose.connect(
// //     MONGODB_URI,
// //     {useNewUrlParser: true, useUnifiedTopology: true}
// // );
// // Db Setup
connectDB();

// Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Parse HTML Body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// this is the same as bellow
const demos = require('./controllers/demos-controller');
demos(app);

// Expanded syntax
// const quizzesController = require('./controllers/quizzes-controller');
// quizzesController(app);
// Compact syntax
require('./controllers/quizzes-controller')(app);

// questions
require('./controllers/questions-controller')(app);

// attempts
require('./controllers/quiz-attempts-controller')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})