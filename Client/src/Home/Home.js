import react, { useEffect, useState } from "react";
import "./Home.css";
import "./bootstrap.css";
import axios from "axios"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Home() {
  const [query, setQuery] = useState([])
    let url = "http://localhost:2022/user/getquestions";
    const dataFromDatabase = async ()=>{
       try{
         const response = await axios.get(url)
         let converted = JSON.parse(JSON.stringify(response.data))
        setQuery(converted)
       }catch(err){
          console.log(err)
       }
    }
    useEffect(() => {
     dataFromDatabase()   
    }, [])
  return (
    <div className=" home">
      <div className="home__welcome">
        <div>
          <Link to='/askquestion' className="home__button">Ask Question </Link>
        </div>
        <div className="welcome">
          {/* show username in homepage */}

          <h4>Welcome:</h4>
        </div>
      </div>

      <div className="form_question">
        <h4>Questions</h4>
      </div>
      <div className="user_answer">
        <div className="user_info">
            <div className="icon_name">
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY430C26CjaOASw2QXMy15oVjaUWmvlYpdqQ&amp;usqp=CAU" /> */}
          {/* <p>username</p> */}
          </div>
          <div className="Question">
          {/* <p>Question</p> */}
          </div>
        </div>
        
            {/* <div className="home_arrow">
                <img src="https://ik.imagekit.io/AmazonImg12/Amazon_Images/1668108358326_9WzNAXr0w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668108770662" />
            </div> */}

            <table className='table_body'>
          
          <tbody>
          {query.map((data,i)=>{
              let display = (
            <tr>
              <td><AccountCircleIcon />
              <p>username</p>
              </td>
              <td>{data.question}</td>
              <td><ChevronRightIcon/></td>
  
            </tr>
              )
              return display

            })}
          </tbody>
          
        </table>
           
      </div>
    </div>
  );
}

export default Home;
