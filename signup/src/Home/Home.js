import react from "react";
import "./Home.css";
import "./bootstrap.css";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Home() {
  return (
    <div className="container home">
      <div className="home__welcome">
        <div>
          <button className="home__button">Ask Question</button>
        </div>
        <div className="welcome">
          {/* show username in homepage */}

          <h4>Welcome</h4>
        </div>
      </div>

      <div className="form_question">
        <h4>Questions</h4>
      </div>
      <div className="form_from"></div>
      <div className="user_answer">
        <div className="user_info">
            <div className="icon_name">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY430C26CjaOASw2QXMy15oVjaUWmvlYpdqQ&amp;usqp=CAU" />
          <p>username</p>
          </div>
          <div className="Question">
          <p>Question</p>
          </div>
        </div>
        
            <div className="home_arrow">
                <img src="https://ik.imagekit.io/AmazonImg12/Amazon_Images/1668108358326_9WzNAXr0w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668108770662" />
            </div>
           
      </div>
    </div>
  );
}

export default Home;
