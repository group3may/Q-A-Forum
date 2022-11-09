import React, { useState } from "react";
import "./AskQuestion.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="askQuestion">
      <div className="steps">
        <h2>Steps to write a good question</h2>
      </div>
      <div className="ulContainer">
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div className="formContainer shadow">
        <div>
          <h2>Ask a public question</h2>
          <p>Go to Question page</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                className="title"
                type="text"
                placeholder="Title"
                // value={title}
                OnChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <textarea
                className="description"
                type="text"
                placeholder="Question Description..."
                // value={description}
                OnChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button>Post Your Question</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
