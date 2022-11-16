import express from "express"
import mysql from "mysql"
import cors from "cors"

import insertRoute from "./Routes/questionRoutes.js";
import createRoute from "./Routes/createRoute.js";
import everyQuestion from "./Routes/getQuestionsRoute.js"

// initiate express 

const app = express()

// support middleware 
app.use(express.json())
app.use(express.urlencoded( {extended: true }));
app.use(cors())

// middleware 
app.use('/user',insertRoute)
app.use('/user',createRoute)
app.use('/user',everyQuestion)

//  Creating a connection to the database

let myConnections = mysql.createConnection({
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
     user: "groupThree",
     password: "groupThree",
     host: "127.0.0.1",
     database: "QA"
 });
 myConnections.connect((err) => {
     if (err) console.log(err);
     else console.log("Connected");
 });
 // server listener

 const port = 2022
 app.listen(port, ()=>{
     console.log(`listening to ${port}`);
 })
 export default myConnections

