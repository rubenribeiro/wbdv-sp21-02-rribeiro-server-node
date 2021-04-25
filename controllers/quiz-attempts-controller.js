module.exports = (app) => {

    const quizzesAttemptsService = require('../services/attempts/quiz-attempts-service');

    const createAttempt = (req, res) => {
        console.log("POST CALLED \n");
        console.log(JSON.stringify(req.params));
        console.log(JSON.stringify(req.body.arrayOfObjects));

        return quizzesAttemptsService.createAttempt( req.params.qid, req.body)
            .then(attempt => res.send(attempt));
    }

    const findAttemptsForQuiz = (req, res) => {
        console.log(req.body);
        return  quizzesAttemptsService.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts));
    }

    app.post('/api/quizzes/:qid/attempts', createAttempt)
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz);

};