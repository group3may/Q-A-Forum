import express from 'express';

import myConnections from "../server.js";
let allQuestions = (req,res,next)=>{
      let allQuestions = "SELECT * FROM Questions"

      myConnections.query(allQuestions,(err,data)=>{
            if(err){
                  throw err
            }else{
                  console.log(data)
                  res.send(data)

            }
      })

}

export default allQuestions