// import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './Nav/NavBar'
import SignUpPage from './SignUp/SignUpPage';
import Footer from './Footer/Footer'; 
import AskQuestion from './AskQuestion/AskQuestion';
import Home from "./Home/Home";
import LandingPage from './Login/LandingPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/signup' element={<SignUpPage />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/askquestion' element={<AskQuestion />}/>
      </Routes>
      <Footer/>
     
    </Router>
  );
}

export default App;

