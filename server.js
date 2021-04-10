const express = require('express')
const app = express()
const port = 4000

// Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// this is the same as bellow
const demos = require('./controllers/demos-controller');
demos(app);

// Expanded syntax
//const quizzesController = require('./controllers/quizzes-controller');
//quizzesController(app);
// Compact syntax
require('./controllers/quizzes-controller')(app);

// questions
require('./controllers/questions-controller')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})