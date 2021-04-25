// Anything related to data is the responsibility of services
//const quizzes = require ('./quizzes.json');
//const quizzesModel = require('../../models/quizzes/quizzes-model');


const quizzesDao = require('../../daos/quizzes-dao');

const findAllQuizzes = () =>  quizzesDao.findAllQuizzes();
    //return quizzesModel.find();
    //return quizzes;


const findQuizById = (qid) => quizzesDao.findQuizById(qid);
    //return quizzesModel.findById(qid);

    // return an array (async)
    // return quizzesModel.find({
    //     _id: quizId
    // });

    // old sync from file
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId;
    // });

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