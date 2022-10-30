const express=require('express');
const { test, AllQuiz, OneQuiz, CreateQuiz, UpdateQuiz, DeleteQuiz, CreateAnswer, GetAllAnswer, DeleteAllAnswer } = require('../controllers/QuizController');
const router=express.Router()

// get all quiz questions
router.get('/questions', AllQuiz)
// get one quiz question
router.get('/questions/:id', OneQuiz)
// create one quiz question
router.post('/questions', CreateQuiz)
// update one quiz question
router.put('/questions/:id',UpdateQuiz)
// delete one quiz question
router.delete('/questions/:id',DeleteQuiz)
// this one is just a test


// create quiz answer
router.post('/answer', CreateAnswer)
// Get quiz answer
router.get('/answer', GetAllAnswer)
router.delete('/answer', DeleteAllAnswer)


router.get('/', (req,res)=>{
    res.send('H3ll0 W0RlD')
})

module.exports=router;