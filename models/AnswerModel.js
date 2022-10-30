const mongoose = require("mongoose");
const AnswerSchema = new mongoose.Schema({
  answer:{},
  question: [],
},{versionKey:false});
let AnswerModel=mongoose.model("answers", AnswerSchema);
module.exports = AnswerModel;
