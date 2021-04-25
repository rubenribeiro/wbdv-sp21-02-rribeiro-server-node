const questionsModel = require('../models/questions/questions-model');
const quizzesModel = require('../models/quizzes/quizzes-model');

const findAllQuestions = () => questionsModel.find();

const findQuestionById = (qid) => questionsModel.find(qid);

const findQuestionsForQuiz = (qzid) => questionsModel.find({ 'quizId': qzid });

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
};


