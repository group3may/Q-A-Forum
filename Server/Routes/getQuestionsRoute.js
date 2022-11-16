import express from 'express';
import allQuestions from '../Controller/getQuestion.js'

let  everyQuestion = express.Router();

everyQuestion.get('/getquestions',allQuestions);

export default everyQuestion