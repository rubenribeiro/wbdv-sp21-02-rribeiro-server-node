
// Anything related to data is the responsibility of services

const quizzes = require ('./quizzes.json');

// TODO: Node.js

const findAllQuizzes = () => {
    return quizzes;
}

const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId;
    });
}

//console.log(findAllQuizzes());
//console.log(findQuizById('123'));

// TODO: MongoDB
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}


module.exports = {
    createQuiz,
    findQuizById,
    findAllQuizzes,
    updateQuiz,
    deleteQuiz
}