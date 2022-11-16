import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import './SignUp.css'
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';


function SignUpPage() {
  return (
    

    <div className="sign_up">
        <div className="section_wrapper ">
    <div className="left shadow">
      <div>
        <div>
          <p><strong>Join the network</strong></p>
        </div>
        <div>
          <p className="par_two">
            Already have an account?<span> </span>
            <a href="#">Sign in</a>
          </p>
        </div>
      </div>
      <div>
        <form>
          <input className="input"
           type="text"
            name="email"
            placeholder="Email address" 
            // onChange={handleChange}
          />
          <br />
<div className="flex_input">
          <input className="input"
            type="text"
            name="firstName"
            placeholder="First Name"
            // onChange={handleChange}
          />
          <br />

          <input className="input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            // onChange={handleChange}
          />

</div>

          <input className="input"
            type="text"
            name="userName"
            placeholder="User Name"
            // onChange={handleChange}
          />
          <br />

          <input className="input"
            type="password"
            name="password"
            placeholder="Password"
            // onChange={handleChange}
          />
          <br />

          <button className="agree_btn">Agree and Join</button>
        </form>
      </div>
      <div>
        <p className="par_two">
          I agree to the <a href="#">privacy policy</a> and
        <a href="#"> terms of service.</a>
        </p>
        <p className="last_par par_two">
          <a href="#">Already have an account?</a>
        </p>
      </div>
    </div>
    <div className="right">
      <p className="about par_two">About</p>
      <h2>Evangadi Networks Q&A</h2>
      <p className=" right_par par_two">
      No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.
      </p>
      <p className=" right_par par_two">
      Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.
      </p>
      <a className='how_button'href="#">HOW IT WORKS</a>
    </div>
    </div>
  </div>
  )
}

export default SignUpPage