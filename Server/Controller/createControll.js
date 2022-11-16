import myConnections from "../server.js";
import createQuestion from "../Schema/schema.js"

let createTable = (req,res)=>{
 
    myConnections.query(createQuestion, (err, results, fields) => {
        if (err) console.log(err);
      });
      res.end("Tables created")
}

export default createTable;