const attemptsDao = require('../../daos/quiz-attempts-dao');

const scoreQuiz = (questions) =>  attemptsDao.scoreQuiz(questions);

const findAttemptsForQuiz = (qid) => attemptsDao.findAttemptsForQuiz(qid);

const createAttempt = (qid, attempt) => attemptsDao.createAttempt(qid, attempt);

module.exports = {
    scoreQuiz,
    findAttemptsForQuiz,
    createAttempt
}