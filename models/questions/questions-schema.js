const mongoose = require('mongoose');
const questionSchema = mongoose.Schema(
    {
        title: String,
        quizId: String,
        question: String,
        correct: String,
        type: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"]},
        choices: [String],
        answer: String,
    },
    {
        collection: "questions"
    }
)

module.exports = questionSchema;