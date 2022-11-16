import express from 'express'
import createTable from '../Controller/createControll.js'


let createRoute = express.Router();

createRoute.get('/create',createTable)

export default createRoute;