import React, { useState } from "react";
import "./questionDA.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import{Link} from "react-router-dom"

function QuestionDA() {
  const [userName,setUserName]=useState('')
  const [answer,setAnswer]=useState('')

  return (
    <div className="form">
      <div className="form_header">
        <a href=""><img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"/></a>
        <div className="header_option">
         <a href="/home">Home</a>
          <a href="/how">How it Works</a>
          <button>LogOut</button>
        </div>
      </div>
      <div className="container">
        <div className="form_question">
          <h5>Question</h5>
          <p>display Question here</p>
          <p className="question_detail">how does it work</p>
        </div>
        <div className="form_from">
          <h5>Answer From The Community</h5>
        </div>
        <div className="user_answer">
          <div className="user_info">
          {/* <AccountCircleIcon />  */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY430C26CjaOASw2QXMy15oVjaUWmvlYpdqQ&amp;usqp=CAU"/>
          <p>username</p>
          </div>
          <p>answer</p>
        </div>
        <div className="form_answer">
          <div className="answer_sec">
          <h5>Answer The Top Question</h5>
          <p>Go to Question page</p>
          </div>
          <textarea className="answer_text" placeholder="Your Answer.." cols="120" rows="5"></textarea>
          <button type="submit">Post Your Answer</button>
        </div>
        
      </div>
    </div>
  );
}

export default QuestionDA;
