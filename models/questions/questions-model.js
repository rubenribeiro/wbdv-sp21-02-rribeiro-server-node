const mongoose = require("mongoose");
const questionSchema = require("./questions-schema");
const questionsModel = mongoose.model("QuestionModel", questionSchema);

module.exports = questionsModel;