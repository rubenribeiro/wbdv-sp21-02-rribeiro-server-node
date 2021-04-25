module.exports = (app) => {

    const quizzesService = require('../services/quizzes/quizzes-service');

    const findAllQuizzes = (req, res) => {
        //const quizzes = quizzesService.findAllQuizzes();
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes);
            });
        //res.send(quizzes);
    };

    const findQuizById = (req, res) => {
        const qid = req.params['quizId'];
        const quiz = quizzesService.findQuizById(qid);
        quizzesService.findQuizById(qid)
            .then((quiz) => {
                res.send(quiz);
            });
        //res.send(quiz);

    };

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:quizId', findQuizById);
};