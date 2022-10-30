const AnswerModel = require("../models/AnswerModel");
const QuizModel = require("../models/QuizModel");

// get all quiz questions
exports.AllQuiz = async (req, res) => {
  try {
    const questions = await QuizModel.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
// get one quiz question
exports.OneQuiz = async (req, res) => {
  try {
    const _id = req.params.id;
    const question = await QuizModel.findOne({ _id });
    if (!question) {
      return res.status(404).json({});
    } else {
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
exports.CreateQuiz = async (req, res) => {
  try {
    const { description } = req.body;
    const { alternatives } = req.body;
    console.log(description, alternatives);
    const question = await QuizModel.create({
      description,
      alternatives,
    });
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
exports.UpdateQuiz = async (req, res) => {
  try {
    const _id = req.params.id;
    const { description, alternatives } = req.body;
    let question = await QuizModel.findOne({ _id });
    if (!question) {
      question = await QuizModel.create({
        description,
        alternatives,
      });
      return res.status(201).json(question);
    } else {
      question.description = description;
      question.alternatives = alternatives;
      await question.save();
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
exports.DeleteQuiz = async (req, res) => {
  try {
    const _id = req.params.id;
    const question = await QuizModel.deleteOne({ _id });
    if (question.deletedCount === 0) {
      return res.status(404).json();
    } else {
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};


//ans

exports.CreateAnswer = async (req, res) => {
  try {
    let data=req.body;
    console.log(data)
    
    
    const question = await AnswerModel.insertMany(data);
    return res.status(201).json(question);
  } 
  catch (error) {
    return res.status(500).json({ error: error });
  }
};
exports.GetAllAnswer = async (req, res) => {
  try {
    const questions = await AnswerModel.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
exports.DeleteAllAnswer = async (req, res) => {
  try {
    const questions = await AnswerModel.remove();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
