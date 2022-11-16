import express from 'express'
import newQuestion from '../Controller/questionController.js'

let insertRoute = express.Router();

insertRoute.post('/insert',newQuestion)

export default insertRoute