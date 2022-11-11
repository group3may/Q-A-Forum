// import './App.css';
import Navbar from './Nav/NavBar'
import SignUpPage from './SignUp/SignUpPage';
import Footer from './Footer/Footer'; 
import AskQuestion from './AskQuestion';
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SignUpPage /> 
      <AskQuestion />
      <Footer/>
    </div>
  );
}

export default App;

