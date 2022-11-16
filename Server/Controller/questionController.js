import myConnections from "../server.js";

let newQuestion = (req, res) => {  
  const {	question,question_discription } = req.body
    let sqlAddToProducts = 
    `INSERT INTO Questions (question,question_discription) VALUES ('${question}','${question_discription}')`;
    
    myConnections.query(sqlAddToProducts, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
   
    });
  
    res.end('new qestion added')
  
  }

  export default newQuestion