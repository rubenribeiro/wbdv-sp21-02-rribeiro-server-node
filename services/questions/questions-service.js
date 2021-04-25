//const questions = require('./questions.json');
//const questionsModel = require('../../models/questions/questions-model');

const questionsDao = require('../../daos/questions-dao');

const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const findAllQuestions = () => questionsDao.findAllQuestions();
   // return questionsModel.find();

const findQuestionsForQuiz = (qid) =>  questionsDao.findQuestionsForQuiz(qid);
    //return questionsModel.find({quizId: qzid});
    // return questions.filter((question) => {
    //    return question.quizId === qzid;
    // });

const findQuestionById = (qid) => questionsDao.findQuestionById(qid);
    // return questions.find((question) => {
    //     return question._id === quid;
    // })

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}